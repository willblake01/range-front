import styled from 'styled-components';
import { Logo, Nav, Search } from '.';
import { Cart } from '..';

const StyledAlternateHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/q_auto/f_auto/v1770302647/range-front/headers/hero-image-alternate.webp');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 48rem;
  width: 100%;
  @media (max-width: 130rem) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const NavPosition = styled.div`
  align-self: end;
`;

const SearchPosition = styled.div`
  position: absolute;
  top: 36rem;
  right: 4rem;
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
