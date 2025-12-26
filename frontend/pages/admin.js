import { AlternateHeader } from '../components/AlternateHeader';
import { Admin, Footer, PleaseLogin, RequirePermission } from '../components';

const PermissionsPage = () => {
  return (
    <>
      <AlternateHeader />
      <PleaseLogin>
        <RequirePermission permission='PERMISSIONUPDATE'>
          <Admin />
        </RequirePermission>
      </PleaseLogin>
      <Footer />
    </>
  );
};

export default PermissionsPage;
