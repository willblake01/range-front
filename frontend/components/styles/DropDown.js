import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGrey);
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : props.theme.white)};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : props.theme.white)};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border: 6px solid var(--green);
  height: max-content;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
