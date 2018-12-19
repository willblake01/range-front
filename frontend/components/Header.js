import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';
import HeaderCopy from './HeaderCopy';
import LearnMoreButton from './LearnMoreButton';

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
    border-bottom: 10px solid ${props => props.theme.green};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/main_img.png');
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
  #button {
    position: relative;
    top: 130px;
    left: 132px;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className='bar'>
      <Logo>
        <Link href='/'>
          <a>Range Front</a>
        </Link>
      </Logo>
      <Nav />
      <HeaderCopy />
      <div id='button'>
        <Link href='/learn-more'>
          <a>
            <LearnMoreButton />
          </a>
        </Link>
      </div>
    </div>
    <div className='sub-bar'>
      <Search />
    </div>
  </StyledHeader>
)

export default Header;
