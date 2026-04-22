import Image from 'next/image'
import styled from 'styled-components';

const StyledAcceptedPayments = styled.div`
  .accepted-payment {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60rem;
    width: 100%;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/q_auto/f_auto/v1770300599/range-front/shared/topography.webp');
  }
`;

const AcceptedPayments = () => (
  <StyledAcceptedPayments>
    <div className='accepted-payment'>
      <Image
        src='https://res.cloudinary.com/willblake01/image/upload/q_auto/f_auto/v1770303140/range-front/accepted-payments/credit-card.webp'
        alt='Credit Card'
        height={251.85}
        width={400}
      />
      <Image
        src='https://res.cloudinary.com/willblake01/image/upload/q_auto/f_auto/v1770303428/range-front/accepted-payments/bitcoin.webp'
        alt='Credit Card'
        height={280}
        width={280}
      />
    </div>
  </StyledAcceptedPayments>
);

export { AcceptedPayments };
