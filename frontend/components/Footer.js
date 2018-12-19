import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  .footer {
    width: 100%;
    height: 140px;
    background-color: ${props => props.theme.green};
  }

  .footer-block {
    position: relative;
    top: 54px;
    text-align: center;
    color: ${props => props.theme.white};
  }

  .social {
    text-align: right;
  }

  .social-icon {
      position: relative;
      top: 50px;
      height: 40px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className='footer'>
      <div className='social'>
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
      </div>
      <p className="footer-block">
          <Link href='https://github.com/project2-ecommerce/Wecommerce' target="_blank">
              <a>
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
          </Link> Created By: Will Blake 2018 &copy;
      </p>
    </div>
  </StyledFooter>
)

export default Footer;
