import { AlternateHeader } from '../components/AlternateHeader';
import { Admin, Footer, RequirePermission } from '../components';

const PermissionsPage = () => {
  return (
    <>
      <AlternateHeader />
      <RequirePermission permission='PERMISSIONUPDATE'>
        <Admin />
      </RequirePermission>
      <Footer />
    </>
  );
};

export default PermissionsPage;
