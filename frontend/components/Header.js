import styled from 'styled-components';
import { Cart, LargeButton, Logo, Nav, Search } from '.';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/main_img.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 480px;
  width: 100%;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const NavPosition = styled.div`
  z-index: 2;
  height: max-content;
  position: absolute;
  top: 120px;
  width: 100%;
`;

const SearchPosition = styled.div`
  z-index: 2;
  position: absolute;
  top: 60px;
  right: 20px;
`;

const Section = styled.section`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 194px;
  left: 116px;
  height: max-content;
  width: max-content;
  a {
    height: max-content;
    width: max-content;
  }
  button {
    margin: 20px 0;
  }
`;

const CopyStyles = styled.div`
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
    <Section>
      <CopyStyles>
        <span className='medium-abril-fatface'>For the love of the</span>
        <span className='large-abril-fatface'>OUTDOORS</span>
        <span className='small-railway'>Whether you're a weekend warrior or a</span>
        <span className='small-railway'>Navy SEAL, we've got you covered.</span>
      </CopyStyles>
      <a
        href='/learn-more'
        target='_blank'
        rel='noopener noreferrer'
      >
          <LargeButton buttonText='Learn More' />
      </a>
    </Section>
    <Cart />
  </StyledHeader>
)

export { Header };
