import Header from '../components/Header';
import ShoppingTiles from '../components/ShoppingTiles';
import Marketing from '../components/Marketing';
import AcceptedPayments from '../components/AcceptedPayments';
import Parallax from '../components/Parallax';

const Home = props => (
  <div>
    <Header />
    <ShoppingTiles />
    <Marketing />
    <AcceptedPayments />
    <Parallax />
  </div>
);

export default Home;
