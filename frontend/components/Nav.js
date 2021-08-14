import styled from 'styled-components';
import Link from 'next/link';
import { useCart } from '../lib/cartState';
import { CartCount } from './CartCount';
import { SignOut } from './SignOut';
import { useUser } from './User';

const NavStyles = styled.ul`
  background-color: var(--darkOrange);
  opacity: .9;
  margin: 0;
  padding: 5px 20px 5px 20px;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  height: 55px;
  width: 100%;
  * {
    margin: 6px;
  }
  a {
    color: var(--offWhite);
    text-decoration: none;
  }
  a:hover {
    color: #0000EE;
  }
`;

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

export { Nav };
