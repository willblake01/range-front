import styled from 'styled-components';

const StyledLargeButton = styled.button`
  background-color: ${({ buttonColor }) => buttonColor ||  'var(--green)'};
  color: var(--offWhite);
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
  &:hover {
    color:  blue;
  }
`;

const LargeButton = ({ children, buttonColor, ...props }) => (
  <StyledLargeButton type='button' buttonColor={buttonColor} {...props}>{children}</StyledLargeButton>
);

export { LargeButton };
