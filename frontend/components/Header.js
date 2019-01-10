import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import Search from './Search';
import LearnMoreButton from './LearnMoreButton';
import Cart from './Cart';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.green};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    width: 100%;
    height: 480px;
    border-bottom: 4px solid ${props => props.theme.green};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/main_img.png');
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
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border: 4px solid ${props => props.theme.green};
  }
`;

const NavStyle = styled.div`
  position: relative;
  top: 110px;
`;

const CopyStyle = styled.div`
  line-height: 0px;
  color: ${props => props.theme.darkOrange};
  opacity: .9;
`;

const Header = () => (
  <StyledHeader>
    <div className='bar'>
      <Logo>
        <Link href='/'>
          <a>Range Front</a>
        </Link>
      </Logo>
      <NavStyle>
        <Nav />
      </NavStyle>
      <CopyStyle>
        <div className='header-copy'>
          <p id='first-line'>For the love of</p>
          <p id='second-line'>OUTDOOR</p>
          <p id='third-line'>Whether you're a weekend warrior or a</p>
          <p id='fourth-line'>Navy SEAL, we've got you covered.</p>
        </div>
        <div id='button'>
          <Link href='/learnMore'>
            <a>
              <LearnMoreButton>LEARN MORE</LearnMoreButton>
            </a>
          </Link>
        </div>
      </CopyStyle>
    </div>
    <div className='sub-bar'>
      <Search />
    </div>
    <Cart />
  </StyledHeader>
)

export default Header;
