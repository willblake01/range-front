import Image from 'next/image'
import styled from 'styled-components';

const StyledAcceptedPayments = styled.div`
  .accepted-payment {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60rem;
    width: 100%;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/f_auto,q_auto/v1538509893/range-front/topography.png');
  }
`;

const AcceptedPayments = () => (
  <StyledAcceptedPayments>
    <div className='accepted-payment'>
      <Image
        src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/credit_card.png'
        alt='Credit Card'
        height='251.85'
        width='400'
      />
      <Image
        src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/bitcoin.png'
        alt='Credit Card'
        height='280'
        width='280'
      />
    </div>
  </StyledAcceptedPayments>
);

export { AcceptedPayments };
