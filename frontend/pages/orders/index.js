import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import NProgress from 'nprogress';
import { PageMain } from '@/components/styles';
import { AlternateHeader, DisplayError, Footer, PleaseLogin } from '@/components/shared';
import { Orders } from '@/components';
import { useUser } from '../../hooks';
import { USER_ORDERS_QUERY } from '../../components/graphql/orders';

const OrdersPage = () => {
  const { user, loading: userLoading } = useUser();
  const isLoggedIn = !!user?.id;

  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);

  const showLoading = userLoading || (isLoggedIn && loading)

  useEffect(() => {
    if (showLoading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [showLoading]);

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          {error ? (
            <DisplayError error={error} />
          ) : showLoading ? (
            <p>Loading...</p>
          ) : (
            <Orders orders={data?.orders ?? []} />
          )}
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  );
};

export default OrdersPage;
