import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import NProgress from 'nprogress';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { CURRENT_USER_QUERY, useUser } from '../hooks';
import { calcTotalPrice, formatMoney } from '../lib';
import { DisplayError, LargeButton } from '.';

const StyledOrder = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  height: 100%;
  width: 100%;
  min-width: 500px;
  transform: translateX(100%);
  transition: all 0.3s;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transform: translateX(0);
  header {
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0 0 1rem 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

const StyledOrderItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

const StyledCheckoutForm = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  margin: 2rem;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 168px;
  width: 48rem;
  
  button {
    margin-top: auto;
  }
`;

const StyledTotalPrice = styled.p`
  margin-bottom: 1rem;
`;

const StyledTestCardInfo = styled.div`
  font-size: 1.2rem;
  color: var(--grey);
  background: var(--offWhite);
  padding: 0.8rem;
  border-radius: 3px;
  
  strong {
    color: var(--black);
  }
`;

const stripeLib = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

const OrderItem = ({ orderItem }) => {
  const { item, quantity } = orderItem;
  if (!item) return null;

  return (
    <>
      <img
        width='100'
        src={item.image}
        alt={item.title}
      />
      <div>
        <h3>{item.title}</h3>
        <p>
          {formatMoney(item.price * quantity)}-
          <em>
            {quantity} &times; {formatMoney(item.price)} each
          </em>
        </p>
      </div>
    </>
  );
};

const CheckoutForm = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { user, loading: userLoading, error: userError } = useUser();
  
  const [checkout, { loading: graphQLLoading, error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  const handleSubmit = async (e) => {

    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    setError(null);

    // 2. Start the page transition
    NProgress.start();
    setSubmitting(true);

    try {
      // 3. Create the payment method via stripe (Token comes back here if successful)
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      console.log(paymentMethod);

      // 4. Handle any errors from stripe
      if (stripeError) {
        setError(stripeError);

        NProgress.done();

        return; // stops the checkout from happening
      };

      // 5. Send the token from step 3 to our keystone server, via a custom mutation!
      const res = await checkout({
        variables: { token: paymentMethod.id },
      });

      const orderId = res?.data?.createOrder?.id;

      // 6. Change the page to view the order
      router.push(`/order/${orderId}`);

      console.log(`Finished with the order!!`);
      console.log(res);

      NProgress.done();
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
      NProgress.done();
    };
  };

  if (userError) return <DisplayError error={userError} />;
  if (graphQLError) return <DisplayError error={graphQLError} />;

  if (userLoading) return <p>Loading...</p>;
  if (!user) return <p>Please sign in to checkout.</p>;

  return (
    <>
      <StyledOrder>
        <header>
          <h1>{user?.firstName} {user?.lastName}'s order</h1>
        </header>
        <ul>
          {user?.cart?.map((cartItem) => (
            <StyledOrderItem key={cartItem.id}>
              <OrderItem orderItem={cartItem} />
            </StyledOrderItem>
          ))}
        </ul>
        <footer>
          <StyledTotalPrice>
            {formatMoney(calcTotalPrice(user?.cart))}
          </StyledTotalPrice>
        </footer>
      </StyledOrder>
      <StyledCheckoutForm onSubmit={handleSubmit}>
        {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
        {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
        <StyledTestCardInfo>
        <strong>Test Card:</strong> 4242 4242 4242 4242 | <strong>Exp:</strong> Any future date | <strong>CVC:</strong> Any 3 digits
      </StyledTestCardInfo>
        <CardElement />
        <LargeButton type='submit' buttonColor='var(--darkOrange)' disabled={submitting || graphQLLoading}>
          Place Order
        </LargeButton>
      </StyledCheckoutForm>
    </>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
};

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

export { Checkout };
