import { AlternateHeader, Checkout, Footer, PleaseLogin } from '../components';

const CheckoutPage = ({query}) => (
  <>
    <AlternateHeader />
    <PleaseLogin>
      <Checkout page={parseFloat(query.page) || 1} />
    </PleaseLogin>
    <Footer />
  </>
);

export default CheckoutPage;
