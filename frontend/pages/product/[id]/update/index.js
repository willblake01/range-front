import { StyledUpdateProduct } from '../../../../components/styles/UpdateProductStyles';
import { AlternateHeader, Footer, UpdateProduct } from '../../../../components';

const UpdateProductPage = ({ query }) => {
  return (
    <>
      <AlternateHeader />
      <StyledUpdateProduct>
        <UpdateProduct id={query.id} />
      </StyledUpdateProduct>
      <Footer />
    </>
  );
}

export default UpdateProductPage;
