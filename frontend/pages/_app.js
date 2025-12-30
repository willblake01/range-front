import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';
import { CartStateProvider } from '../lib';
import { Page } from '../components';
import { initializeApollo } from '../lib/apolloClient';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const apollo = initializeApollo();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Range Front is a faux outdoor gear marketplace for backpacks, tents, and adventure equipment."
        />
      </Head>

      <ApolloProvider client={apollo}>
        <CartStateProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CartStateProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
