import { useRouter } from 'next/router';
import { AlternateHeader, Footer } from '../../../../components/shared';
import { UpdateProduct } from '../../../../components';

const UpdateProductPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <AlternateHeader />
      <UpdateProduct id={id} />
      <Footer />
    </>
  );
}

export default UpdateProductPage;
