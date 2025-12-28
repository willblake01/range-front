import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import NProgress from 'nprogress';
import { formatMoney } from '../../lib';
import { DisplayError } from '../shared';

const StyledOrders = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: clamp(2rem, 5vw, 4rem);
  height: 100%;
  width: 100%;
`;

const StyledOrdersContainer = styled.div`
  margin: 0;
  width: 100%;
  max-width: 90rem;

  h2 {
    margin: 0 0 2rem 0;
  }
`;

const StyledOrdersColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledOrder = styled.li`
  box-shadow: var(--bs);
  list-style: none;
  padding: 2rem;
  border: 0.1rem solid var(--offWhite);
  background: var(--white);

  .images {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 20rem;
      object-fit: cover;
      width: 100%;
    }
  }

  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
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

const countItemsInOrder = (order) => {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
};

const Orders = ({ orders, loading, error }) => {
  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();

    return () => NProgress.done();
  }, [loading]);

  if (error) return <DisplayError error={error} />;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Your Orders ({orders?.length})</title>
      </Head>
      <StyledOrders>
        <StyledOrdersContainer>
          {!orders.length ? <h2>No orders found.</h2> : <h2>You have {orders?.length} orders!</h2>}

          <StyledOrdersColumn>
            {orders?.map((order) => (
              <StyledOrder key={order.id}>
                <Link href={`/order/${order.id}`}>
                  <a style={{ display: 'block' }}>
                    <div className='order-meta'>
                      <p>{countItemsInOrder(order)} Items</p>
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
                  </a>
                </Link>
              </StyledOrder>
            ))}
          </StyledOrdersColumn>
        </StyledOrdersContainer>
      </StyledOrders>
    </>
  );
};

export { Orders };
