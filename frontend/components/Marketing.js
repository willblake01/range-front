import Link from 'next/link';
import styled from 'styled-components';
import { LargeButton } from '.';

const StyledMarketing = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 607px;
  width: 100%;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/marketing_img.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const PositionedButton = styled.div`
  margin-bottom: 80px;
`

const Marketing = () => (
  <StyledMarketing>
    <Link href='/clearance'>
      <PositionedButton>
        <LargeButton>Shop Clearance</LargeButton>
      </PositionedButton>
    </Link>
  </StyledMarketing>
);

export { Marketing };
