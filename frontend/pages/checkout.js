import { useRouter } from 'next/router';
import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '../components/shared';
import { Checkout } from '../components';

const CheckoutPage = () => {
  const router = useRouter();
  
  const page = Number(router.query.page || 1);

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          <Checkout page={page} />
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  )};

export default CheckoutPage;
