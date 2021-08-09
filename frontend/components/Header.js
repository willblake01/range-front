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
  justify-content: space-between;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/main_img.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 480px;
  width: 100%;
    #button {
    position: relative;
    left: 132px;
    bottom: 60px;
    }
    .header-copy {
      align-self: flex-start;
      position: relative;
      left: 132px;
        #first-line {
          font-family: AbrilFatface-Regular;
          font-size: 40px;
        }
        #second-line {
          position: relative;
          bottom: 34px;
          font-family: AbrilFatface-Regular;
          font-size: 88px;
        }
        #third-line {
          position: relative;
          bottom: 74px;
          font-family: Raleway-Medium;
          font-size: 20px;
        }
        #fourth-line {
          position: relative;
          bottom: 70px;
          font-family: Raleway-Medium;
          font-size: 20px;
        }
    }
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const NavPosition = styled.div`
  width: var(--maxWidth);
  position: absolute;
  top: 120px;
`;

const CopyStyles = styled.div`
  line-height: 0px;
  color: var(--darkOrange);
  opacity: .9;
  position: absolute;
  top: 180px;
  z-index: 2;
`;

export const Header = () => (
  <StyledHeader>
    <Logo />
    <NavPosition>
      <Nav />
    </NavPosition>
    <CopyStyles>
      <div className='header-copy'>
        <p id='first-line'>For the love of</p>
        <p id='second-line'>OUTDOOR</p>
        <p id='third-line'>Whether you're a weekend warrior or a</p>
        <p id='fourth-line'>Navy SEAL, we've got you covered.</p>
      </div>
      <div id='button'>
        <Link href='/learn-more'>
          <a>
            <LargeButton buttonText='Learn More' />
          </a>
        </Link>
      </div>
    </CopyStyles>
    <Cart />
  </StyledHeader>
)
