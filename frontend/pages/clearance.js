import { useRouter } from 'next/router';
import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '../components/shared';
import { Clearance } from '../components';

const ClearancePage = () => {
  const router = useRouter();
    
  const page = Number(router.query.page || 1);

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          <Clearance page={page} />
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  )};

export default ClearancePage;
