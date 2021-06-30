import AlternateHeader from '../components/AlternateHeader';
import Products from '../components/Products';
import Footer from '../components/Footer';

const ShopPage = ({query}) => (
  <>
    <AlternateHeader />
    <Products page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default ShopPage;
