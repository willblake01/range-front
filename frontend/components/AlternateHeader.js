import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';
import Logo from '../components/Logo';

const StyledAlternateHeader = styled.header`
  height: 260px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/mountain-range.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const NavPosition = styled.div`
  position: relative;
  top: 206px;
  height: max-content;
`;

const AlternateHeader = () => (
  <>
    <StyledAlternateHeader>
      <Logo />
      <NavPosition>
        <Nav />
      </NavPosition>
    </StyledAlternateHeader>
    <Cart />
  </>
);

export default AlternateHeader;
