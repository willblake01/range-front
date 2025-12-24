import { AlternateHeader } from '../components/AlternateHeader';
import { CreateProduct, Footer, RequirePermission } from '../components';

const CreateProductPage = () => {
  return (
    <>
      <AlternateHeader />
      <RequirePermission permission='PRODUCTCREATE'>
        <CreateProduct />
      </RequirePermission>
      <Footer />
    </>
  );
}

export default CreateProductPage;
