import styled from 'styled-components';
import Link from 'next/link';
import { useCart } from '../lib/cartState';
import { CartCount } from './CartCount';
import { SignOut } from './SignOut';
import { useUser } from './User';

export const NavStyles = styled.ul`
  grid-column: 2;
  z-index: 2;
  background-color: var(--darkOrange);
  opacity: .9;
  margin: 0;
  padding: 5px 20px 5px 20px;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  height: 55px;
  width: 100%;
  a {
    margin-right: 5px;
    margin-left: 5px;
    color: var(--white);
  }
  a:hover {
    color: blue;
  }
`;

const StyledButton = styled.button `
  background-color: var(--green);
  font-size: 16px;
  border: none;
  width: 82px;
`;

export const Nav = () => {
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
