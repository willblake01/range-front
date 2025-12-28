import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '../components/shared';
import { Checkout } from '../components';

const CheckoutPage = ({query}) => (
  <>
    <AlternateHeader />
    <PageMain>
      <PleaseLogin>
        <Checkout page={parseFloat(query.page) || 1} />
      </PleaseLogin>
    </PageMain>
    <Footer />
  </>
);

export default CheckoutPage;
