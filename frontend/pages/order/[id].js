import { useRouter } from 'next/router';
import { AlternateHeader, Footer } from '../../components/shared';
import { Order } from '../../components';

const OrderPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <AlternateHeader />
      <Order id={id} />
      <Footer />
    </>
  )
};

export default OrderPage;
