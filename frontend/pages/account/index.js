import { PageMain } from '@/components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '@/components/shared';
import { Account } from '@/components';

const AccountPage = () => (
  <>
    <AlternateHeader />
    <PageMain>
      <PleaseLogin>
        <Account />
      </PleaseLogin>
    </PageMain>
    <Footer />
  </>
);

export default AccountPage;
