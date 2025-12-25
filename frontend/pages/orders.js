import { AlternateHeader, Orders, Footer, PleaseLogin } from '../components';

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
