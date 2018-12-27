import styled from 'styled-components';

const ClearanceButton = styled.button`
  background-color: ${props => props.theme.brown};
  :hover {
    color: blue;
    zoom: 105%;
  }
`;

export default ClearanceButton;
