import styled from 'styled-components';

const LearnMoreButton = styled.button`
  background-color: ${props => props.theme.green};
  :hover {
    color: ${props => props.theme.darkOrange};
    zoom: 105%;
  }
`;

export default LearnMoreButton;
