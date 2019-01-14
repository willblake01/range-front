import styled from 'styled-components';

const LearnMoreButton = styled.button`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  width: 180px;
  height: 42px;
  font-family: Raleway-Regular;
  font-size: 16px;
  :hover {
    color: blue;
    zoom: 105%;
  }
`;

export default LearnMoreButton;
