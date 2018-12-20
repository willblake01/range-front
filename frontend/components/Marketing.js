import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import ClearanceButton from './ClearanceButton';

const MarketingStyle = styled.div`
  .marketing {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 607px;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/marketing_img.png');
  }
  #button {
    position: relative;
    top: 520px;
  }
`;

const Marketing = () => (
  <MarketingStyle>
    <div className='marketing'>
      <div id='button'>
        <Link href='/api/clearance'>
          <a>
            <ClearanceButton>SHOP CLEARANCE</ClearanceButton>
          </a>
        </Link>
      </div>
    </div>
  </MarketingStyle>
)

export default Marketing;
