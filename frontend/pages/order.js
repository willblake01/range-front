import styled from 'styled-components';
import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';
import Nav from '../components/Nav';

const OrderStyle = styled.div`
  padding: 20px;
`;

const OrderPage = props => (
  <PleaseSignIn>
    <Nav />
    <OrderStyle>
      <Order id={props.query.id} />
    </OrderStyle>
  </PleaseSignIn>
);

export default OrderPage;
