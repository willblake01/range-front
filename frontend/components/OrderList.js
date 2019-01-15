import React from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Nav from './Nav';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderItemStyle from './styles/OrderItemStyle';
import Cart from './Cart';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

const HeaderStyle = styled.h2`
  margin-left: 40px;
`;

class OrderList extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Query query={USER_ORDERS_QUERY}>
          {({ data: { orders }, loading, error}) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <Error error={error} />
            return (
              <div>
                <HeaderStyle>You have {orders.length} orders.</HeaderStyle>
                <OrderUl>
                  {orders.map(order => (
                    <OrderItemStyle key={order.id}>
                      <Link href={{
                        pathname: '/order',
                        query: { id: order.id },
                      }}
                      >
                        <a>
                          <div className='order-meta'>
                            <p>{order.items.reduce((a,b) => a + b.quantity, 0)} Items</p>
                            <p>{order.items.length} Products</p>
                            <p>{formatDistance(order.createdAt, new Date())}</p>
                            <p>{formatMoney(order.total)}</p>
                          </div>
                          <div className='images'>
                            {order.items.map(item => (
                              <img key={item.id} src={item.image} alt={item.title} />
                            ))}
                          </div>
                        </a>
                      </Link>
                    </OrderItemStyle>
                  ))}
                </OrderUl>
              </div>
            );
          }}
        </Query>
        <Cart />
      </>
    );
  }
}

export default OrderList;
