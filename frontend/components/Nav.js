'use client'
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../lib/cartState';
import { CartCount, SignOut, useUser } from '.';

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
    margin: 8.64px;
  }
  a {
    color: var(--offWhite);
    text-decoration: none;
  }
  a:hover {
    color: #0000EE;
  }
  button {
    color: var(--offWhite);
    font-size: 1.6rem;
    background: none;
    border: none;margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    height: max-content;
    width: max-content;
  }
  a.login-link {
    margin-left: auto;
    margin-right: 6px;
  }
  .user-links {
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 5px 10px;
    flex-wrap: wrap;
    height: auto;
    min-height: 55px;
    * {
      margin: 4px;
    }
    button {
      font-size: 1.2rem;
    }
  }
`;

const StyledButton = styled.button `
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  width: 82px;
  margin: 8.64px !important;
`;

const Nav = () => {
  const router = useRouter();
  const user = useUser();
  const { openCart } = useCart();

  return (
    <NavStyles data-test='nav'>
      <Link href='/'>Home</Link>
      <Link href='/products'>Shop</Link>
      <Link href='/about'>About</Link>
      {user && (
        <div className="user-links">
          <Link href='/account'>Account</Link>
          <Link href='/orders'>Orders</Link>
          <SignOut />
          <StyledButton type="button" onClick={openCart}>
            Cart
          </StyledButton>
          <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.item ? cartItem.quantity : 0),
                0
              )}
            />
        </div>
      )}
      {!user && router.pathname !== '/login' && (
        <div style={{ marginLeft: 'auto' }}>
          <Link href={`/login?redirect=${encodeURIComponent(router.asPath)}`}>
            Login
          </Link>
        </div>
      )}
    </NavStyles>
  )
};

export { Nav };
