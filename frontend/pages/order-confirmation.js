import { AlternateHeader, Checkout, Footer } from '../components';

const OrderConfirmationPage = ({query}) => (
  <>
    <AlternateHeader />
    <Checkout page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default OrderConfirmationPage;
