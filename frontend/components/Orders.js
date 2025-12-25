import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import NProgress from 'nprogress';
import { formatMoney } from '../lib';
import { DisplayError } from '../components';

const StyledOrders = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  height: 100%;
`;

const StyledOrderItem = styled.li`
  box-shadow: var(--bs);
  list-style: none;
  padding: 2rem;
  border: 1px solid var(--offWhite);
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

const countItemsInAnOrder = (order) => {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
};

const Orders = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);
  
  if (error) return <DisplayError error={error} />

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  const orders = data?.product;
  if (!orders) return <p>No orders found.</p>;

  return (
    <>
      <Head>
        <title>Your Orders ({orders?.length})</title>
      </Head>
      <StyledOrders>
        <h2>You have {orders?.length} orders!</h2>

        {orders?.map((order) => (
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
                {order?.items?.map((item) => (
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

export { Orders };
