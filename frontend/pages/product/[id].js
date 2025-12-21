import { AlternateHeader, Footer, SingleProduct } from '../../components';

const SingleProductPage = ({ query }) => (
  <>
    <AlternateHeader />
    <SingleProduct id={query.id} />
    <Footer />
  </>
)

export default SingleProductPage;
