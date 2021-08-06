import AlternateHeader from '../components/AlternateHeader';
import { SearchStyles } from '../components/styles/DropDown';
import Search from '../components/Search';
import Products from '../components/Products';
import Footer from '../components/Footer';

const ShopPage = ({query}) => (
  <>
    <AlternateHeader />
    <SearchStyles>
      <Search />
    </SearchStyles>
    <Products page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default ShopPage;
