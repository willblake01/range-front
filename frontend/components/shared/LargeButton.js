import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledLargeButton = styled.button`
  background-color: ${({ buttonColor }) => buttonColor ||  'var(--green)'};
  color: var(--offWhite);
  width: 18rem;
  height: 4.2rem;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: 1.3rem;
  display: inline-block;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border: 0.1rem solid transparent;
  &:hover {
    color:  blue;
  }
`;

const LargeButton = forwardRef(({ children, type='button', buttonColor, ...props }, ref) => (
  <StyledLargeButton ref={ref} type={type} buttonColor={buttonColor} {...props}> 
    {children}
  </StyledLargeButton>
  )
);

export { LargeButton };
