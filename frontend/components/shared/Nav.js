import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../../lib';
import { useUser } from '../../hooks';
import { DisplayError } from '../shared';
import { CartCount, SignOut } from '..';

const NavWrapper = styled.nav`
  width: 100%;
  background-color: var(--darkOrange);
  opacity: 0.9;
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  height: 5.5rem;
  padding: 0.5rem 2rem;
  margin: 0;
  list-style: none;
  font-size: 1.6rem;
  font-weight: 600;

  @media (max-width: 76.8rem) {
    flex-wrap: wrap;
    height: auto;
    min-height: 5.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }
`;

const NavItem = styled.li`
  margin: 0.864rem;

  a,
  p {
    color: var(--offWhite);
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--offWhite);
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }

  a:hover,
  button:hover {
    color: #0000EE;
  }
`;

const Spacer = styled.li`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Nav = () => {
  const router = useRouter();
  const { user, loading, error } = useUser();
  const { openCart } = useCart();

  if (error) return <DisplayError error={error} />;

  const showLogin =
    !loading &&
    !user &&
    router.pathname !== '/login' &&
    router.pathname !== '/account';

  const hasAdminPermission = user?.permissions?.includes('ADMIN');
  const hasProductCreatePermission = user?.permissions?.includes('PRODUCTCREATE');

  return (
    <NavWrapper aria-label="Main navigation">
      <StyledNavList>
        <NavItem><Link href="/">Home</Link></NavItem>
        <NavItem><Link href="/products">Shop</Link></NavItem>
        <NavItem><Link href="/about">About</Link></NavItem>

        {(hasAdminPermission || hasProductCreatePermission) && (
          <NavItem><span>|</span></NavItem>
        )}

        {hasAdminPermission && (
          <NavItem><Link href="/admin">Admin</Link></NavItem>
        )}

        {(hasAdminPermission || hasProductCreatePermission) && (
          <NavItem><Link href="/product/create">Create Product</Link></NavItem>
        )}

        {user && (
          <Spacer>
            <NavItem>
              <Link href={`/user/${user.id}/account`}>Account</Link>
            </NavItem>
            <NavItem>
              <Link href={`/user/${user.id}/orders`}>Orders</Link>
            </NavItem>
            <NavItem>
              <SignOut />
            </NavItem>
            <NavItem>
              <button type="button" onClick={openCart}>
                Cart
              </button>
            </NavItem>
            <NavItem>
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.item ? cartItem.quantity : 0),
                  0
                )}
              />
            </NavItem>
          </Spacer>
        )}

        {showLogin && (
          <Spacer>
            <NavItem>
              <Link href={`/login?redirect=${encodeURIComponent(router.asPath)}`}>
                Login
              </Link>
            </NavItem>
          </Spacer>
        )}
      </StyledNavList>
    </NavWrapper>
  );
};

export { Nav };
