import { AlternateHeader, Footer } from '../../components/shared';
import { Products } from '../../components';

export async function getServerSideProps(ctx) {
  const pageParam = ctx.query.page;
  const page = typeof pageParam === 'string' ? Number(pageParam) : 1;

  const categoryParam = ctx.query.category;
  const category = typeof categoryParam === 'string' ? categoryParam : null;

  return { props: { page, category } };
}

export default function ProductsPage({ page, category }) {
  const where = category ? { category_contains: category } : undefined;
  
  return (
    <>
      <AlternateHeader />
      <Products page={page} where={where} />
      <Footer />
    </>
  );
}
