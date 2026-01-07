import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { PageMain } from '@/components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '@/components/shared';
import { Orders } from '@/components';

const OrdersPage = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          <Orders orders={data?.orders ?? []} loading={loading} error={error} />
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  );
};

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      createdAt
      total
      charge
      user {
        id
      }
      items {
        id
        title
        description
        price
        quantity
        image
      }
    }
  }
`;

export default OrdersPage;
