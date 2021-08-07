import AlternateHeader from '../components/AlternateHeader';
import Search from '../components/Search';
import Products from '../components/Products';
import Footer from '../components/Footer';

const ShopPage = ({query}) => (
  <>
    <AlternateHeader />
    <Search />
    <Products page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default ShopPage;
