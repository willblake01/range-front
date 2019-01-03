import Link from 'next/link';
import styled from 'styled-components';
import User from './User';

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
    <NavStyle>
    <User>
      {({data: { me } }) => {
        console.log(me);
        if(me) return <p>{me.name}</p>;
        return null;
      }}
    </User>
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
