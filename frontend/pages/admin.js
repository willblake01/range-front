import { PageMain } from '../components/styles';
import { AlternateHeader, Footer, PleaseLogin } from '../components/shared';
import { Admin, RequirePermission } from '../components';

const PermissionsPage = () => {
  return (
    <>
      <AlternateHeader />
      <PageMain>
        <PleaseLogin>
          <RequirePermission permission='PERMISSIONUPDATE'>
            <Admin />
          </RequirePermission>
        </PleaseLogin>
      </PageMain>
      <Footer />
    </>
  );
};

export default PermissionsPage;
