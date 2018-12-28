import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Social from './Social';

const StyledFooter = styled.footer`
  width: 100%;
  height: 140px;
  background-color: ${props => props.theme.green};
  text-align: right;
    a {
      padding-right: 24px;
    }
      .footer-block {
        position: relative;
        top: 54px;
        text-align: center;
        color: ${props => props.theme.white};
      }
`;

const Footer = () => (
  <StyledFooter>
    <Social />
    <p className='footer-block'>
      <Link href='https://github.com/willblake01/range-front'>
        <a target='_blank'>
          <i aria-hidden='true'>Repository Link</i>
        </a>
      </Link> Created By: Will Blake 2018 &copy;
    </p>
  </StyledFooter>
)

export default Footer;
