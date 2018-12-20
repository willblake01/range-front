import Link from 'next/link';
import styled from 'styled-components';

const SocialStyle = styled.div`
  .social-icon {
    position: relative;
    top: 50px;
    height: 40px;
  }
`;

const Social = () => (
  <SocialStyle>
    <Link href='https://www.facebook.com' target='_blank'>
      <a>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/facebook.svg'
          alt='facebook'
          className='social-icon'
        />
      </a>
    </Link>
    <Link href='https://www.twitter.com' target='_blank'>
      <a>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/twitter.svg'
          alt='twitter'
          className='social-icon'
        />
      </a>
    </Link>
    <Link href='https://www.instagram.com' target='_blank'>
      <a>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/instagram.svg'
          alt='instagram'
          className='social-icon'
        />
      </a>
    </Link>
    <Link href='https://plus.google.com/' target='_blank'>
      <a>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/google.svg'
          alt='google+'
          className='social-icon'
        />
      </a>
    </Link>
  </SocialStyle>
)

export default Social;
