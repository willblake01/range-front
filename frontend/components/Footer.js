import styled from 'styled-components';
import { Social } from '.';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: 240px;
  background-color: var(--green);
  color: var(--offWhite);

  .github-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.4rem;
    color: var(--offWhite);
    text-decoration: none;
    height: max-content;
    * {
      margin: 0 4px 4px 4px; 
    }
  }
`;

const SocialPosition = styled.div`
  z-index: 2;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

const Footer = () => (
  <StyledFooter>
    <a href='https://github.com/willblake01/range-front' className='github-link' target='_blank' rel='noopener noreferrer'>
        <p>Created By: William Blake 2018 &copy;</p>
    </a>
    <SocialPosition>
      <Social />
    </SocialPosition>
  </StyledFooter>
)

export { Footer };
