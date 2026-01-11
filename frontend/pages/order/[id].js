import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import NProgress from 'nprogress';
import { PageMain } from '../../components/styles';
import { AlternateHeader, DisplayError, Footer } from '../../components/shared';
import { Order } from '../../components';
import { SINGLE_ORDER_QUERY } from '../../components/graphql/orders';

const OrderPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const safeId = Array.isArray(id) ? id[0] : id;
  
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: safeId },
    skip: !id,
  });

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;
  if (!data?.order) return <p>No order found.</p>;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <Order order={data?.order} />
      </PageMain>
      <Footer />
    </>
  )
};

export default OrderPage;
