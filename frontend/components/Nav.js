import styled from 'styled-components';
import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import { useUser } from './User';
import NavStyles from '../components/styles/NavStyles';

const StyledButton = styled.button `
  background-color: var(--green);
  font-size: 16px;
  border: none;
  width: 82px;
`;

const Nav = () => {
  const user = useUser();
  const { openCart } = useCart();

  return (
    <NavStyles data-test='nav'>
      <Link href='/about-us'>
        <a>About</a>
      </Link>
      <Link href='/shop'>
        <a>Shop</a>
      </Link>
      {user && (
        <>
          <Link href='/orders'>Orders</Link>
          <Link href='/account'>Account</Link>
          <SignOut />
          <StyledButton type="button" onClick={openCart}>
            My Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.item ? cartItem.quantity : 0),
                0
              )}
            />
          </StyledButton>
        </>
      )}
      {!user && (
        <>
          <Link href='/signin'>
            <a>Sign In</a>
          </Link>
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </>
      )}
    </NavStyles>
  )
};

export default Nav;
