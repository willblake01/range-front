import { AlternateHeader, Footer, UpdateProduct } from '../../../../components';

const UpdateProductPage = ({ query }) => {
  return (
    <>
      <AlternateHeader />
      <UpdateProduct id={query.id} />
      <Footer />
    </>
  );
}

export default UpdateProductPage;
