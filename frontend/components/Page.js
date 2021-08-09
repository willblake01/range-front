import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #FF0000;
    --black: #000000;
    --white: #FFFFFF;
    --offWhite: #EDEDED;
    --grey: #3A3A3A;
    --lightGrey:'#E1E1E';
    --green: #2E5564;
    --brown: #8E3F30;
    --darkOrange: #C65837;
    --lightOrange: #DF997D;
    --maxWidth: 1980px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  max-width: var(--maxWidth);
`;

export default function Page({ children, cool }) {
  return (
    <>
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
