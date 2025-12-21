import { AlternateHeader } from '../components/AlternateHeader';
import { Footer, Products, Search } from '../components';

const ProductsPage = ({query}) => (
  <>
    <AlternateHeader />
    <Products page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default ProductsPage;
