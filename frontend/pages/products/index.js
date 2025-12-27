import { useRouter } from 'next/router';
import { AlternateHeader, Footer } from '../../components/shared';
import { Products } from '../../components';

const ProductsPage = () => {
  const { query } = useRouter();
  const page = parseInt(query.page) || 1;
  
  return (
    <>
      <AlternateHeader />
      <Products page={page} />
      <Footer />
    </>
  );
};

export default ProductsPage;
