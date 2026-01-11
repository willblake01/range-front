import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { PageMain } from '../../components/styles';
import { AlternateHeader, DisplayError, Footer } from '../../components/shared';
import { ProductDescription } from '../../components';
import { SINGLE_PRODUCT_QUERY } from '../../components/graphql/products';

const ProductDescriptionPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const safeId = Array.isArray(id) ? id[0] : id;

  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id: safeId },
    skip: !id
  });

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data?.product) return null;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        {!data?.product ? <p>No product found.</p> : <ProductDescription product={data?.product} />}
      </PageMain>
      <Footer />
    </>
  )
};

export default ProductDescriptionPage;
