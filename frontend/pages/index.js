import Head from 'next/head';
import Header from '../components/Header';
import Search from '../components/Search';
import ShoppingTiles from '../components/ShoppingTiles';
import Marketing from '../components/Marketing';
import AcceptedPayments from '../components/AcceptedPayments';
import Parallax from '../components/Parallax';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Head>
      <title>Range Front</title>

      <script defer src='https://use.fontawesome.com/releases/v5.0.9/js/all.js' integrity='sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl'
        crossOrigin='anonymous'></script>
    </Head>
    <Header />
    <Search />
    <ShoppingTiles />
    <Parallax />
    <Marketing />
    <AcceptedPayments />
    <Footer />
  </>
);

export default Home;
