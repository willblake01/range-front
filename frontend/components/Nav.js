import Link from 'next/link';
import styled from 'styled-components';

const NavStyle = styled.div`
  width: 100%;
  height: 55px;
  position: relative;
  top: 110px;
  background-color: ${props => props.theme.darkOrange};
  opacity: .9;
  padding-left: 132px;
  padding-right: 132px;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: end;
    font-size: 2rem;
  }
`;

const Nav = () => (
  <>
    <NavStyle>
      <Link href='/about-us'>
        <a>About Us</a>
      </Link>
      <Link href='/items'>
        <a>Shop</a>
      </Link>
    </NavStyle>
  </>
);

export default Nav;
