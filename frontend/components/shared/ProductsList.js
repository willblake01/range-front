import styled from 'styled-components';

const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem;
  max: 100%;
  margin: 0 auto;
  text-align: center;

  a {
    text-decoration: none;
  }

  h3 {
    margin: 0;
  }
    
  @media (max-width: 76.8rem) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    padding: 2rem;
  }
`;

const ProductsList = StyledProductsList;

export { ProductsList };
