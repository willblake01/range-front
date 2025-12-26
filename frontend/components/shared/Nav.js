import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../../lib';
import { useUser } from '../../hooks';
import { DisplayError } from '../shared';
import { CartCount, SignOut } from '..';

const StyledNav = styled.ul`
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
  const { user, loading, error } = useUser();
  const { openCart } = useCart();

  if (error) return <DisplayError error={error} />;

  const showLogin = !loading && !user && router.pathname !== '/login' && router.pathname !== '/account';

  return (
    <StyledNav data-test='nav'>
      <Link href='/'>Home</Link>
      <Link href='/products'>Shop</Link>
      <Link href='/about'>About</Link>
      {user?.permissions?.includes('ADMIN') ? <Link href='/admin'>Admin</Link> : null}
      {user ? (
        <div className='user-links'>
          <Link href={`/user/${user.id}/account`}>Account</Link>
          <Link href={`/user/${user.id}/orders`}>Orders</Link>
          <SignOut />
          <StyledButton type='button' onClick={openCart}>
            Cart
          </StyledButton>
          <CartCount
              count={user?.cart?.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.item ? cartItem.quantity : 0),
                0
              )}
            />
        </div>
      ) : null}
      
      {showLogin && (
        <div style={{ marginLeft: 'auto' }}>
          <Link href={`/login?redirect=${encodeURIComponent(router.asPath)}`}>
            Login
          </Link>
        </div>
      )}
    </StyledNav>
  );
};

export { Nav };
