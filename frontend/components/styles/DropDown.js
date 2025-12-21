import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const StyledSearch = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border: 2px solid var(--green);
  border-radius: 50px;
  height: max-content;
  max-width: 328px;
  input {
    width: 100%;
    padding: 8px 16px;
    border: 0;
    border-radius: 50px;
    font-size: 1.6rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

const StyledDropDownItem = styled.div`
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

const DropDownItem = StyledDropDownItem;

const StyledDropDown = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGrey);
  background: white;
`;

const DropDown = StyledDropDown;

export { DropDown, DropDownItem, StyledSearch }
