import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';
import AlternateHeader from '../components/AlternateHeader';

const OrdersPage = props => (
  <PleaseSignIn>
    <AlternateHeader />
    <OrderList />
  </PleaseSignIn>
);

export default OrdersPage;
