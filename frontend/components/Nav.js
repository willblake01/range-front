import Link from 'next/link';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import User from './User';
import SignOut from './SignOut';
import CartCount from './CartCount';

const NavStyle = styled.ul`
  width: 100%;
  height: 55px;
  background-color: ${props => props.theme.darkOrange};
  opacity: .9;
  margin: 0;
  padding: 5px 20px 5px 20px;
  display: flex;
  align-items: center;
  /* justify-self: end; */
  font-size: 1.6rem;
  a {
    margin-right: 5px;
    margin-left: 5px;
  }
  a:hover {
    color: blue;
  }
`;

const StyledButton = styled.button `
  background-color: ${props => props.theme.darkOrange};
  font-size: 16px;
  border: none;
  width: 82px;
`;

const Nav = () => (
  <>
    <User>
      {({data: { me } }) => (
        <NavStyle>
          <Link href='/aboutUs'>
          <a>About</a>
          </Link>
          <Link href='/items'>
            <a>Shop</a>
          </Link>
          {me && (
            <>
              <Link href='/orders'>
                <a>Orders</a>
              </Link>
              <Link href='/me'>
                <a>Account</a>
              </Link>
              <SignOut />
              <Mutation mutation={TOGGLE_CART_MUTATION}>
                {(toggleCart) => (
                  <>
                    <StyledButton onClick={toggleCart}>
                      <a>My Cart</a>
                    </StyledButton>
                    <CartCount
                        count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                    >
                    </CartCount>
                  </>
                )}
              </Mutation>
            </>
          )}
          {!me && (
            <>
              <Link href='/signin'>
                <a>Sign In</a>
              </Link>
              <Link href='/signup'>
                <a>Sign Up</a>
              </Link>
            </>
          )}
        </NavStyle>
      )}
    </User>
  </>
);

export default Nav;
