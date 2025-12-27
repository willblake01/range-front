import { useRouter } from 'next/router';
import { AlternateHeader, Footer } from '../../components/shared';
import { ProductDescription } from '../../components';

const ProductDescriptionPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <AlternateHeader />
      <ProductDescription id={id} />
      <Footer />
    </>
  )
};

export default ProductDescriptionPage;
