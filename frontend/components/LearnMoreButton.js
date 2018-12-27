import styled from 'styled-components';

const LearnMoreButton = styled.button`
  background-color: ${props => props.theme.green};
  :hover {
    color: blue;
    zoom: 105%;
  }
`;

export default LearnMoreButton;
