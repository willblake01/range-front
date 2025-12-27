import styled from 'styled-components';
import Link from 'next/link';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2.4rem;
  left: 2.4rem;
  font-size: 4rem;
  font-weight: 800;
  z-index: 2;
  transform: skew(-7deg);
  background: var(--green);
  margin: 0;
  padding: 0.8rem 2.2rem;
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
  @media (max-width: 130rem) {
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
);

export { Logo };
