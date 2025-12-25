import { Account, AlternateHeader, Footer, PleaseLogin } from '../../../../components';

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
