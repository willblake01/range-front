import { useRouter } from 'next/router';
import styled from 'styled-components';
import { calcTotalPrice, formatMoney, useCart } from '../../lib';
import { useUser } from '../../hooks';
import { DisplayError, LargeButton, PleaseLogin } from '../shared';
import { CartItem, StyledCloseButton } from './components';

const StyledCart = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  height: 100%;
  min-width: 50rem;
  width: 40%;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 1rem 0.3rem rgba(0, 0, 0, 0.2);
  z-index: 5;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 0.5rem solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 1rem double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    /* display: grid;
    grid-template-columns: auto auto; */
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

const StyledTotalPrice = styled.p`
  margin-bottom: 1rem;
`;

const Cart = () => {
  const router = useRouter();
  const { user, loading, error } = useUser();
  const { cartOpen, closeCart } = useCart();

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <PleaseLogin>
      <StyledCart open={cartOpen}>
        <header>
          <h1>{user.firstName} {user.lastName}'s cart</h1>
          <StyledCloseButton onClick={closeCart}>&times;</StyledCloseButton>
        </header>
        <ul>
          {user?.cart?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
        <footer>
          <StyledTotalPrice>{formatMoney(calcTotalPrice(user.cart ?? []))}</StyledTotalPrice>
        </footer>
          <LargeButton
            onClick={() => {
              closeCart();
              router.push('/checkout');
            }}
          >
              Checkout
          </LargeButton>
      </StyledCart>
    </PleaseLogin>
  );
};

export { CartItem, Cart };
