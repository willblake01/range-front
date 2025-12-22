import { AlternateHeader, Checkout, Footer } from '../components';

const CheckoutPage = ({query}) => (
  <>
    <AlternateHeader />
    <Checkout page={parseFloat(query.page) || 1} />
    <Footer />
  </>
);

export default CheckoutPage;
