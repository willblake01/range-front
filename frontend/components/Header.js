import styled from 'styled-components';
import { LargeButton, Logo, Nav, Search } from './shared';
import { Cart } from '.';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509884/range-front/main_img.png');
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

const StyledSection = styled.section`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 19.4rem;
  left: 11.6rem;
  height: max-content;
  width: max-content;
  a {
    height: max-content;
    width: max-content;
  }
  button {
    margin: 2rem 0;
  }
  @media (max-width: 76.8rem) {
    top: 12rem;
    left: 2rem;
    right: 2rem;
    width: calc(100% - 4rem);
  }
`;

const StyledCopy = styled.div`
  color: var(--darkOrange);
  opacity: .9;
  display: flex;
  flex-direction: column;
  .medium-abril-fatface {
    font-family: AbrilFatface-Regular;
    font-size: 3.2rem;
  }
  .large-abril-fatface {
    font-family: AbrilFatface-Regular;
    font-size: 9rem;
  }
  .small-railway {
    font-family: Raleway-Medium;
    font-size: 2rem;
  }
  @media (max-width: 76.8rem) {
    .medium-abril-fatface {
      font-size: 2rem;
    }
    .large-abril-fatface {
      font-size: 4rem;
    }
    .small-railway {
      font-size: 1.4rem;
    }
  }
`;

const NavPosition = styled.div`
  z-index: 2;
  height: max-content;
  position: absolute;
  top: 12rem;
  width: 100%;
`;

const SearchPosition = styled.div`
  z-index: 2;
  position: absolute;
  top: 6rem;
  right: 2rem;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavPosition>
      <Nav />
    </NavPosition>
    <SearchPosition>
      <Search />
    </SearchPosition>
    <StyledSection>
      <StyledCopy>
        <span className='medium-abril-fatface'>For the love of the</span>
        <span className='large-abril-fatface'>OUTDOORS</span>
        <span className='small-railway'>Whether you're a weekend warrior or a</span>
        <span className='small-railway'>Navy SEAL, we've got you covered.</span>
      </StyledCopy>
      <a
        href='/learn-more'
        target='_blank'
        rel='noopener noreferrer'
      >
          <LargeButton>Learn More</LargeButton>
      </a>
    </StyledSection>
    <Cart />
  </StyledHeader>
);

export { Header };
