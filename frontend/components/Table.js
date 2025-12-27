import styled from 'styled-components';

const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 0.1rem solid var(--offWhite);
  thead {
    font-size: 1rem;
  }
  td,
  th {
    border-bottom: 0.1rem solid var(--offWhite);
    border-right: 0.1rem solid var(--offWhite);
    padding: 1rem 0.5rem;
    position: relative;
    &:last-child {
      border-right: none;
      width: 15rem;
      button {
        width: 100%;
      }
    }
  }
  tr {
    &:hover {
      background: var(--offWhite);
    }
  }
`;

export { StyledTable };
