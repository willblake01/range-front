import { PleaseLogin } from '../../../../components/shared';
import { Account, AlternateHeader, Footer } from '../../../../components';

const AccountPage = ({query}) => (
  <>
    <AlternateHeader />
    <PleaseLogin>
      <Account />
    </PleaseLogin>
    <Footer />
  </>
);

export default AccountPage;
