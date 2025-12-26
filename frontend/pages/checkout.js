import { PleaseLogin } from '../components/shared';
import { AlternateHeader, Checkout, Footer } from '../components';

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
