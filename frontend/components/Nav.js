import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import SignOut from './SignOut';

const NavStyle = styled.ul`
  width: 100%;
  height: 55px;
  position: relative;
  top: 110px;
  background-color: ${props => props.theme.darkOrange};
  opacity: .9;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  /* justify-self: end; */
  font-size: 1.6rem;
  a {
    color: ${props => props.theme.white};
    margin-right: 10px;
    margin-left: 5px;
  }
  a:hover {
    color: blue;
  }
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
              <Link href='/cart'>
                <a>Cart</a>
              </Link>
              <Link href='/orders'>
                <a>Orders</a>
              </Link>
              <Link href='/me'>
                <a>Account</a>
              </Link>
              <SignOut />
            </>
          )}
          {!me && (
            <>
              <Link href='/signup'>
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
