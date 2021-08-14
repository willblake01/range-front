import styled from 'styled-components';
import { Nav } from './Nav';
import { Cart } from './Cart';
import { Logo } from '../components/Logo';

const StyledAlternateHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/mountain-range.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 480px;
  width: 100%;
`;

const NavPosition = styled.div`
  align-self: end;
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

export { AlternateHeader };
