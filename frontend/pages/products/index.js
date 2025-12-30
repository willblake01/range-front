import { useRouter } from 'next/router';
import { AlternateHeader, Footer } from '../../components/shared';
import { Products } from '../../components';

const ProductsPage = () => {
  const router = useRouter();

  const page = Number(router.query.page || 1);
  const category = router.query.category;

  const where = category ? { category_contains: category } : undefined;

  return (
    <>
      <AlternateHeader />
      <Products page={page} where={where} />
      <Footer />
    </>
  );
};

export default ProductsPage;
