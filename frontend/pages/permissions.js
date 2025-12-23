import { AlternateHeader } from '../components/AlternateHeader';
import { Footer, Permissions, RequirePermission } from '../components';

const PermissionsPage = () => {
  return (
    <>
      <AlternateHeader />
      <RequirePermission permission='ADMIN'>
        <Permissions />
      </RequirePermission>
      <Footer />
    </>
  );
};

export default PermissionsPage;
