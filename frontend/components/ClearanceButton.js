import styled from 'styled-components';

const ClearanceButton = styled.button`
  background-color: ${props => props.theme.brown};
  width: 180px;
    height: 42px;
    font-family: Raleway-Regular;
    font-size: 16px;
  :hover {
    color: blue;
    zoom: 105%;
  }
`;

export default ClearanceButton;
