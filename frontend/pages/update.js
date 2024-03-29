import styled from 'styled-components';
import { AlternateHeader } from '../components/AlternateHeader';
import { Search } from '../components/Search';
import { UpdateProduct } from '../components/UpdateProduct';
import { Footer } from '../components/Footer';

const StyledUpdate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  color: var(--green);
  padding: 40px;
  height: 100%;
`;

const UpdateProductPage = ({ query }) => {
  return (
    <>
      <AlternateHeader />
      <Search />
      <StyledUpdate>
        <UpdateProduct id={query.id} />
      </StyledUpdate>
      <Footer />
    </>
  );
}

export default UpdateProductPage;
