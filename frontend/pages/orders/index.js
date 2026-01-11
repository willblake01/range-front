import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import NProgress from 'nprogress';
import { PageMain } from '@/components/styles';
import { AlternateHeader, DisplayError, Footer, PleaseLogin } from '@/components/shared';
import { Orders } from '@/components';
import { USER_ORDERS_QUERY } from '../../components/orders';

const OrdersPage = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          <Orders orders={data?.orders ?? []} />
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  );
};

export default OrdersPage;
