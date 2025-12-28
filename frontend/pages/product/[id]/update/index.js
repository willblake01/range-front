import { useRouter } from 'next/router';
import { PageMain } from '../../../../components/styles';
import { AlternateHeader, Footer } from '../../../../components/shared';
import { UpdateProduct } from '../../../../components';

const UpdateProductPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <AlternateHeader />
      <PageMain>
        <UpdateProduct id={id} />
      </PageMain>
      <Footer />
    </>
  );
}

export default UpdateProductPage;
