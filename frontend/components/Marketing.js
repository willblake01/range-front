import Link from 'next/link';
import styled from 'styled-components';
import { LargeButton } from './shared';

const StyledMarketing = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 60.7rem;
  width: 100%;
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/marketing_img.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonPosition = styled.div`
  margin-bottom: 8rem;
`

const Marketing = () => (
  <StyledMarketing>
    <Link href='/clearance'>
      <ButtonPosition>
        <LargeButton>Shop Clearance</LargeButton>
      </ButtonPosition>
    </Link>
  </StyledMarketing>
);

export { Marketing };
