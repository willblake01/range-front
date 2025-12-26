import { AlternateHeader } from '../components/AlternateHeader';
import { PleaseLogin } from '../components/shared';
import { Admin, Footer, RequirePermission } from '../components';

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
