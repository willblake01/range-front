import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { useCart } from '../lib/cartState';
import { LargeButton } from '../components';
import { CURRENT_USER_QUERY } from '.';

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

const stripeLib = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

const CheckoutForm = () => {
  const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 168px;
  
  button {
    margin-top: auto;
  }
`;

  const TestCardInfo = styled.div`
    font-size: 1.2rem;
    color: var(--grey);
    background: var(--offWhite);
    padding: 0.8rem;
    border-radius: 3px;
    
    strong {
      color: var(--black);
    }
  `;

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {

    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    setLoading(true);

    // 2. Start the page transition
    nProgress.start();

    // 3. Create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);

    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      nProgress.done();

      return; // stops the checkout from happening
    }
    // 5. Send the token from step 3 to our keystone server, via a custom mutation!
    try {
      const order = await checkout({
        variables: {
          token: paymentMethod.id,
        },
      });

      console.log(`Finished with the order!!`);
      console.log(order);

      // 6. Change the page to view the order
      router.push({
        pathname: `/order/[id]`,
        query: {
          id: order.data.createOrder.id,
        },
      });

      // 7. Close the cart
      closeCart();

      // 8. turn the loader off
      setLoading(false);
      nProgress.done();
    } catch (err) {
      console.error(err);
      setError(err);
      setLoading(false);
      nProgress.done();
    }
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
      <TestCardInfo>
        <strong>Test Card:</strong> 4242 4242 4242 4242 | <strong>Exp:</strong> Any future date | <strong>CVC:</strong> Any 3 digits
      </TestCardInfo>
      <CardElement />
      <LargeButton buttonText='Place Order' />
    </CheckoutFormStyles>
  );
}

const Checkout = () => {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };
