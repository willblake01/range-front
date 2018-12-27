import Link from 'next/link';
import styled from 'styled-components';

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
  justify-self: end;
  font-size: 2rem;
  a {
    margin-right: 10px;
    margin-left: 5px;
  }
`;

const Nav = () => (
  <>
    <NavStyle>
      <Link href='/aboutUs'>
        <a>About</a>
      </Link>
      <Link href='/items'>
        <a>Shop</a>
      </Link>
      <Link href='/cart'>
        <a>Cart</a>
      </Link>
      <Link href='/signIn'>
        <a>Sign In</a>
      </Link>
      <Link href='/signIn'>
        <a>Sign Up</a>
      </Link>
    </NavStyle>
  </>
);

export default Nav;
