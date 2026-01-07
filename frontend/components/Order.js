import { useEffect } from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import NProgress from 'nprogress';
import { formatMoney, formatOrderDate } from '../lib';
import { DisplayError } from './shared';

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  color: var(--green);
  margin: 0;
  padding: clamp(2rem, 5vw, 8rem);
  width: 100%;
`;

const StyledOrderDetails = styled.div`
  background: var(--white);
  width: 62rem;
  max-width: 100rem;
  margin: 0 auto;
  border: 0.1rem solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;

  .order-row {
    display: grid;
    grid-template-columns: 1fr 5fr;
    border-bottom: 0.1rem solid var(--offWhite);
    padding: 1rem 0;
    align-items: center;
  }

  .label {
    font-size: 1.5rem;
    font-weight: 900;
    text-align: right;
    padding-right: 1rem;
  }

  .value {
    margin: 0;
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

const StyledOrderItems = styled.div`
  background: var(--white);
  width: 62rem;
  max-width: 100rem;
  margin: 0 auto;
  border: 0.1rem solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  border-top: 1rem solid var(--green);

  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 0.1rem solid var(--offWhite);
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }

  .order-item {
    border-bottom: 0.1rem solid var(--offWhite);
    display: grid;
    grid-template-columns: 30rem 1fr;
    align-items: start;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .image {
    position: relative;
    width: 30rem;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    border-radius: 0.6rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Order = ({ id }) => {
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

  const order = data?.order;
  if (!order) return <p>No order found.</p>;
  
  return (
    <>
      <Head>
        <title>Range Front - {order.id}</title>
      </Head>
      <StyledOrder>
        <StyledOrderDetails>
          <div className='order-row'>
            <span className='label'>ID:</span>
            <span className='value'>{order.id}</span>
          </div>
          <div className='order-row'>
            <span className='label'>Date: </span>
            <span className='value'>{formatOrderDate(order.createdAt)}</span>
          </div>
          <div className='order-row'>
            <span className='label'>Charge:</span>
            <span className='value'>{order.charge}</span>
          </div>
          <div className='order-row'>
            <span className='label'>Total:</span>
            <span className='value'>{formatMoney(order.total)}</span>
          </div>
          <div className='order-row'>
            <span className='label'>Items:</span>
            <span className='value'>{order.items.length}</span>
          </div>
        </StyledOrderDetails>
        <StyledOrderItems>
          {order?.items?.map((item) => (
            <div className='order-item' key={item.id}>
              <div className='image'>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout='fill'
                  objectFit='contain'
                  sizes='(max-width: 768px) 100vw, 480px'
                />
              </div>
              <div className='item-details'Product>
                <h2>{item.brand}</h2>
                <h2>{item.title}</h2>
                <p>Qty: {item.quantity}</p>
                <p>Each: {formatMoney(item.price)}</p>
                <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </StyledOrderItems>
      </StyledOrder>
    </>
  );
};

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      total
      charge
      createdAt
      items {
        id
        brand
        title
        price
        quantity
        image
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export { Order };
