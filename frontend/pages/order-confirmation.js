import { AlternateHeader, Footer } from '../components/shared';
import { Checkout } from '../components';

const OrderConfirmationPage = ({query}) => (
  <>
    <AlternateHeader />
    <Checkout page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default OrderConfirmationPage;
