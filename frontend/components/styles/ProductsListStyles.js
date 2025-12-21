import styled from 'styled-components';

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 20px;
  }
`;

export { ProductsListStyles };
