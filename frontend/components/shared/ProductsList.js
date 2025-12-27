import styled from 'styled-components';

const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
  text-align: center;
  padding: 4rem;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
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

export { StyledProductsList };
