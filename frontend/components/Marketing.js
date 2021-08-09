import Link from 'next/link';
import styled from 'styled-components';
import LargeButton from './LargeButton';

const MarketingStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 607px;
  width: 100%;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/marketing_img.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonPosition = styled.div`
  position: relative;
  top: 520px;
`

const Marketing = () => (
  <MarketingStyle>
    <Link href='/clearance'>
      <ButtonPosition>
        <LargeButton buttonText='SHOP CLEARANCE' />
      </ButtonPosition>
    </Link>
  </MarketingStyle>
)

export default Marketing;
