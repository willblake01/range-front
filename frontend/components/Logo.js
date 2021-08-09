import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.div`
  height: 74px;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 23px;
  left: 23px;
  font-size: 3.5rem;
  margin: 0;
  z-index: 2;
  transform: skew(-7deg);
  text-decoration: none;
  background: var(--green);
  color: white;
  h3 {
    margin: 0;
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

export const Logo = () => (
  <StyledLogo>
    <Link href='/'>
      <h3>RANGE FRONT</h3>
    </Link>
  </StyledLogo>
)
