import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-regular-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  html {
    --red: #FF0000;
    --black: #000000;
    --white: #FFFFFF;
    --offWhite: #EDEDED;
    --grey: #3A3A3A;
    --lightGrey: #E1E1E1;
    --green: #2E5564;
    --brown: #8E3F30;
    --darkOrange: #C65837;
    --lightOrange: #DF997D;
    --maxWidth: 198rem;
    --bs: 0 1.2rem 2.4rem 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

const PageShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Page = ({ children, cool }) => (
  <>
    <GlobalStyles />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          fontSize: '1.4rem',
        },
        success: {
          style: { background: '#2E5564', color: '#fff' },
        },
        error: {
          style: { background: '#8E3F30', color: '#fff' },
        },
      }}
    />
    <PageShell>
      <InnerStyles>{children}</InnerStyles>
    </PageShell>
  </>
);

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};

export { Page };
