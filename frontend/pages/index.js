import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/shared';
import { AcceptedPayments, Marketing, Parallax, ShoppingTiles } from '../components';

const Home = () => (
  <>
    <Head>
      <title>Range Front</title>
      <link rel='icon' href='/static/favicon.png' />
    </Head>
    <Header />
    <ShoppingTiles />
    <Parallax />
    <Marketing />
    <AcceptedPayments />
    <Footer />
  </>
);

export default Home;
