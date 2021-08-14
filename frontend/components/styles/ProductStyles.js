import styled from 'styled-components';

const ProductStyles = styled.div`
  background: var(--white);
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    background-color: var(--white);
    padding: 20px;
  }
  p {
    text-indent: 50px;
    line-height: 2;
    flex-grow: 1;
    padding: 2rem 3rem;
    text-align: left;
    font-size: 1.4rem;
  }

  .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    * {
      background: var(--white);
      border: 2px solid var(--green);
      font-size: 1rem;
      padding: 1rem;
      color: var(--darkGrey);
    }
  }
`;

export { ProductStyles };
