import AlternateHeader from '../../components/AlternateHeader';
import Search from '../../components/Search';
import SingleProduct from '../../components/SingleProduct';
import Footer from '../../components/Footer';

const SingleProductPage = ({ query }) => (
  <>
    <AlternateHeader />
    <Search />
    <SingleProduct id={query.id} />
    <Footer />
  </>
)

export default SingleProductPage;
