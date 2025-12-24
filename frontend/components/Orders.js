import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { formatMoney } from '../lib';
import { StyledOrderItem } from '../components/styles';
import { DisplayError } from '../components';

const StyledOrders = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  height: 100%;
`;

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

const countItemsInAnOrder = (order) => {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
};

const Orders = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);
  
  if (loading) return <p>Loading...</p>;

  if (error) return <DisplayError error={error} />

  const { orders } = data;

  return (
    <>
      <Head>
        <title>Your Orders ({orders?.length})</title>
      </Head>
      <StyledOrders>
        <h2>You have {orders?.length} orders!</h2>

        {orders.map((order) => (
          <StyledOrderItem>
            <Link href={`/order/${order.id}`}>
              <div className='order-meta'>
                <p>{countItemsInAnOrder(order)} Items</p>
                <p>
                  {order.items.length} Product
                  {order.items.length === 1 ? '' : 's'}
                </p>
                <p>{formatMoney(order.total)}</p>
              </div>
              <div className='images'>
                {order.items.map((item) => (
                  <img
                    key={`image-${item.id}`}
                    src={item.image}
                    alt={item.title}
                  />
                ))}
              </div>
            </Link>
          </StyledOrderItem>
        ))}
      </StyledOrders>
    </>
  );
};

export { Orders };
