import { useRouter } from 'next/router';
import { PageMain } from '../../components/styles';
import { AlternateHeader, Footer } from '../../components/shared';
import { ProductDescription } from '../../components';

const ProductDescriptionPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <ProductDescription id={id} />
      </PageMain>
      <Footer />
    </>
  )
};

export default ProductDescriptionPage;
