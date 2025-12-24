import { useRouter } from 'next/router';
import { AlternateHeader, Footer, Pagination, Products } from '../../components';

const ProductsPage = () => {
  const { query } = useRouter();
  const page = parseInt(query.page) || 1;
  
  return (
    <>
      <AlternateHeader />
      <Products page={page} />
      <Pagination page={page} />
      <Footer />
    </>
  );
};

export default ProductsPage;
