import styled from 'styled-components';

const StyledLargeButton = styled.button`
  background-color: var(--green);
  color: var(--white);
  width: 180px;
  height: 42px;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: 1.3rem;
  display: inline-block;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: 1px solid transparent;
  :hover {
    color:  blue;
  }
`;

export const LargeButton = ({buttonColor, buttonText}) => (
  <StyledLargeButton buttonColor={buttonColor} buttonText={buttonText}>{buttonText}</StyledLargeButton>
)
