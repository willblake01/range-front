import { AlternateHeader, Footer, PleaseLogin } from '../../../../components/shared';
import { Orders } from '../../../../components';

const OrdersPage = () => {
  return (
    <>
      <AlternateHeader />
      <PleaseLogin>
        <Orders />
      </PleaseLogin>
      <Footer />
    </>
  );
};

export default OrdersPage;
