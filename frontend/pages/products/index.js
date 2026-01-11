import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import NProgress from 'nprogress';
import { perPage } from '../../config';
import { PageMain } from '../../components/styles';
import { AlternateHeader, DisplayError, Footer } from '../../components/shared';
import { Products } from '../../components';
import { PRODUCTS_QUERY } from '../../components/graphql/products';

export const getServerSideProps = async (ctx) => {
  const pageParam = ctx.query.page;
  const page = typeof pageParam === 'string' ? Number(pageParam) : 1;

  const categoryParam = ctx.query.category;
  const category = typeof categoryParam === 'string' ? categoryParam : null;

  return { props: { page, category } };
}

const ProductsPage = ({ page, category }) => {
  const where = category ? { category_contains: category } : undefined;

  const { data, loading, error } = useQuery(PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
      where: where ?? undefined,
    },
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  const noProducts = data?.products?.length === 0;

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  
  return (
    <>
      <AlternateHeader />
      <PageMain>
        {
          noProducts
            ?
          <p>No products found.</p>
            :
          <Products page={page} products={data?.products} where={where} />
        }
      </PageMain>
      <Footer />
    </>
  );
};

export default ProductsPage;
