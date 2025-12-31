import { AlternateHeader, Footer } from '../../components/shared'
import { Products } from '../../components'

const perPage = 12

export async function getServerSideProps(ctx) {
  const pageParam = ctx.query.page;
  const page = typeof pageParam === "string" ? Number(pageParam) : 1;

  const categoryParam = ctx.query.category;
  const category = typeof categoryParam === "string" ? categoryParam : null;

  const where = category ? { category_contains: category } : null; // ✅ serializable

  return {
    props: {
      page,
      where,
    },
  };
}

export default function ProductsPage({ page, where }) {
  return (
    <>
      <AlternateHeader />
      <Products page={page} where={where} />
      <Footer />
    </>
  );
}
