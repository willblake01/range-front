import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from './Header';
import Meta from './Meta';
import Landing from './Landing';
import Footer from './Footer';
import ShoppingTiles from './ShoppingTiles';
import Marketing from './Marketing';
import AcceptedPayments from './AcceptedPayments';
import Parallax from './Parallax';


const theme = {
  red: '#FF0000',
  black: '#000000',
  white: '#FFFFFF',
  green: '#2E5564',
  brown: '#8E3F30',
  darkOrange: '#C65837',
  lightOrange: '#DF997D',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal `
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    foramt: woff2;
    font-weight: normal;
    font-size: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next';
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  button {
    width: 180px;
    height: 42px;
    font-family: Raleway-Regular;
    font-size: 16px;
    color: ${theme.white};
}
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <ShoppingTiles />
          <Landing />
            {/* <Inner>{this.props.children}</Inner> */}
          <Marketing />
          <AcceptedPayments />
          <Parallax />
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
