import styled from 'styled-components';

const StyledPagination = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  text-align: center;
  background-color: var(--white);
  margin: 2rem auto;
  border: 0.1rem solid var(--lightGrey);
  border-radius: 1rem;
  width: fit-content;

  & > * {
    margin: 0;
    padding: 1.5rem 3rem;
    border-right: 0.1rem solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }

  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

const PaginationRow = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const Pagination = StyledPagination;

export { Pagination, PaginationRow };
