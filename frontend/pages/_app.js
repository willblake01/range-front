import { useMemo } from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';
import { CartStateProvider } from '../lib';
import { Page } from '../components';
import { initializeApollo } from '../lib/apolloClient';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const apollo = useMemo(() => initializeApollo(), []);

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Range Front is a faux outdoor gear marketplace for backpacks, tents, and adventure equipment.'
        />
      </Head>

      <ApolloProvider client={apollo}>
        <CartStateProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
          <Analytics />
          <SpeedInsights />
        </CartStateProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;

export const reportWebVitals = (metric) => {
  // metric.name: 'LCP' | 'CLS' | 'INP' | etc.
  // metric.value: number
  // metric.id: unique per page load
  if (process.env.NODE_ENV === 'production') {
    // Intentionally left as a hook for RUM / analytics wiring
    // e.g. sendBeacon(metric)
  };
};
