import { AlternateHeader } from '../../../components/AlternateHeader';
import { CreateProduct, Footer, PleaseLogin, RequirePermission } from '../../../components';

const CreateProductPage = () => {
  return (
    <>
      <AlternateHeader />
      <PleaseLogin>
        <RequirePermission permission='PRODUCTCREATE'>
          <CreateProduct />
        </RequirePermission>
      </PleaseLogin>
      <Footer />
    </>
  );
}

export default CreateProductPage;
