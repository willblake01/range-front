import { PleaseLogin } from '../../../components/shared';
import { AlternateHeader, Footer, RequirePermission, CreateProduct } from '../../../components';

const PermissionsPage = () => {
  return (
    <>
      <AlternateHeader />
      <PleaseLogin>
        <RequirePermission permission='PERMISSIONUPDATE'>
          <CreateProduct />
        </RequirePermission>
      </PleaseLogin>
      <Footer />
    </>
  );
};

export default PermissionsPage;
