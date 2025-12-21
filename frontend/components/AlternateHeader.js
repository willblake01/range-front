import styled from 'styled-components';
import { Cart, Logo, Nav, Search } from '../components';

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

const SearchPosition = styled.div`
  position: absolute;
  top: 360px;
  right: 20px;
  z-index: 2;
`;

const AlternateHeader = () => (
  <>
    <StyledAlternateHeader>
      <Logo />
      <NavPosition>
        <Nav />
      </NavPosition>
      <SearchPosition>
        <Search />
      </SearchPosition>
    </StyledAlternateHeader>
    <Cart />
  </>
);

export { AlternateHeader };
