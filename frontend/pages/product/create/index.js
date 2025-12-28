import { PageMain } from '../../../components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '../../../components/shared';
import { RequirePermission, CreateProduct } from '../../../components';

const PermissionsPage = () => {
  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          <RequirePermission permission='PERMISSIONUPDATE'>
            <CreateProduct />
          </RequirePermission>
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  );
};

export default PermissionsPage;
