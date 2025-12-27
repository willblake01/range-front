import { AlternateHeader, Footer, PleaseLogin } from '../../../../components/shared';
import { Account } from '../../../../components';

const AccountPage = () => (
  <>
    <AlternateHeader />
    <PleaseLogin>
      <Account />
    </PleaseLogin>
    <Footer />
  </>
);

export default AccountPage;
