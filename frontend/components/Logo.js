import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 24px;
  left: 24px;
  font-size: 4rem;
  font-weight: 800;
  z-index: 2;
  transform: skew(-7deg);
  background: var(--green);
  margin: 0;
  padding: 8px 22px;
  height: max-content;
  width: max-content;
  a {
    color: var(--offWhite);
    text-decoration: none;
  }
  a:hover {
    color: var(--offWhite);
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Logo = () => (
  <StyledLogo>
    <Link href='/'>
      RANGE FRONT
    </Link>
  </StyledLogo>
)

export { Logo };
