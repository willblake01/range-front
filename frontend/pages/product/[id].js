import { AlternateHeader, Footer, ProductDescription } from '../../components';

const ProductDescriptionPage = ({ query }) => (
  <>
    <AlternateHeader />
    <ProductDescription id={query.id} />
    <Footer />
  </>
)

export default ProductDescriptionPage;
