import { useRouter } from 'next/router';
import { AlternateHeader, Footer } from '../components/shared';
import { Checkout } from '../components';

const OrderConfirmationPage = () => {
  const router = useRouter();
      
  const page = Number(router.query.page || 1);

  return (
    <>
      <AlternateHeader />
      <Checkout page={page} />
      <Footer />
    </>
  )};

export default OrderConfirmationPage;
