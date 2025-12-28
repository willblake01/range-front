import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { AlternateHeader, Footer, PleaseLogin } from '../../../../components/shared';
import { Orders } from '../../../../components';

const OrdersPage = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);
  
  return (
    <>
      <AlternateHeader />
      <PleaseLogin>
        <Orders
          orders={data?.orders}
          loading={loading}
          error={error}
        />
      </PleaseLogin>
      <Footer />
    </>
  );
};

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      charge
      total
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
