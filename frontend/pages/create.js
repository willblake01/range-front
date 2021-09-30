import styled from 'styled-components';
import { AlternateHeader } from '../components/AlternateHeader';
import { Search } from '../components/Search';
import { PleaseSignIn } from '../components/PleaseSignIn';
import { CreateProduct } from '../components/CreateProduct';
import { Footer } from '../components/Footer';

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
      <Search />
      <PleaseSignIn>
        <StyledCreate>
          <CreateProduct />
        </StyledCreate>
      </PleaseSignIn>
      <Footer />
    </>
  );
}

export default CreateProductPage;
