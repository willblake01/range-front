import Link from 'next/link';
import styled from 'styled-components';

const StyledSocial = styled.div`
  .social-icon {
    position: relative;
    text-align: center;
    border-radius: 15px;
    padding: 5px;
    margin: 4px;
    height: 42px;
    width: 42px;
    background-color: var(--offWhite);
  }
`;

export const Social = () => (
  <StyledSocial>
    <Link href='https://www.facebook.com'>
      <a target='_blank'>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/facebook.svg'
          alt='facebook'
          className='social-icon'
        />
      </a>
    </Link>
    <Link href='https://www.twitter.com'>
      <a target='_blank'>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/twitter.svg'
          alt='twitter'
          className='social-icon'
        />
      </a>
    </Link>
    <Link href='https://www.instagram.com'>
      <a target='_blank'>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/instagram.svg'
          alt='instagram'
          className='social-icon'
        />
      </a>
    </Link>
    <Link href='https://plus.google.com/'>
      <a target='_blank'>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/google.svg'
          alt='google+'
          className='social-icon'
        />
      </a>
    </Link>
  </StyledSocial>
)
