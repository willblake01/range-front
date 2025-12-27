import { AlternateHeader, Footer, PleaseLogin } from '../components/shared';
import { Admin, RequirePermission } from '../components';

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
