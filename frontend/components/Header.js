import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Nav';
import { LargeButton } from './LargeButton';
import { Cart } from './Cart';
import { Logo } from '../components/Logo';

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

const Section = styled.section`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 210px;
  left: 132px;
  height: max-content;
  width: max-content;
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
    font-size: 2.4rem;
  }
  .large-abril-fatface {
    font-family: AbrilFatface-Regular;
    font-size: 7rem;
  }
  .small-railway {
    font-family: Raleway-Medium;
    font-size: 1.8rem;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavPosition>
      <Nav />
    </NavPosition>
    <Section>
      <CopyStyles>
        <span class='medium-abril-fatface'>For the love of</span>
        <span class='large-abril-fatface'>OUTDOOR</span>
        <span class='small-railway'>Whether you're a weekend warrior or a</span>
        <span class='small-railway'>Navy SEAL, we've got you covered.</span>
      </CopyStyles>
      <Link href='/learn-more'>
        <a>
          <LargeButton buttonText='Learn More' />
        </a>
      </Link>
    </Section>
    <Cart />
  </StyledHeader>
)

export { Header };
