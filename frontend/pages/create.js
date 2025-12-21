import styled from 'styled-components';
import { AlternateHeader } from '../components/AlternateHeader';
import { CreateProduct, Footer, RequirePermission } from '../components';

const StyledCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const CreateProductPage = () => {
  return (
    <>
      <AlternateHeader />
      <RequirePermission permission="PRODUCTCREATE">
        <StyledCreate>
          <CreateProduct />
        </StyledCreate>
      </RequirePermission>
      <Footer />
    </>
  );
}

export default CreateProductPage;
