import styled from 'styled-components';

const StyledSocial = styled.div`
  .social-icon {
    position: relative;
    text-align: center;
    border-radius: 15px;
    padding: 5px;
    margin: 8px;
    height: 42px;
    width: 42px;
    background-color: var(--offWhite);
  }
`;

const Social = () => (
  <StyledSocial>
    <a
      href='https://www.facebook.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/facebook.svg'
        alt='facebook'
        className='social-icon'
      />
    </a>
    <a
      href='https://www.instagram.com'
      target='_blank'
      rel='noopener noreferrer'  
    >
      <img
        src='https://res.cloudinary.com/willblake01/image/upload/v1538509883/range-front/instagram.svg'
        alt='instagram'
        className='social-icon'
      />
    </a>
    <a
      href='https://www.twitter.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src='https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/twitter.svg'
        alt='twitter'
        className='social-icon'
      />
    </a>
  </StyledSocial>
);

export { Social };
