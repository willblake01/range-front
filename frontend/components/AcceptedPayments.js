import styled from 'styled-components';

const StyledAcceptedPayments = styled.div`
  .accepted-payment {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 58rem;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  }
  .section {
    max-width: 72rem;
  }
  #credit-card {
    width: 40rem;
    text-align: center;
  }
  #bitcoin {
    width: 28rem;
    text-align: center;
  }
`;

const AcceptedPayments = () => (
  <StyledAcceptedPayments>
    <div className='accepted-payment'>
      <div className='section'>
        <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/credit_card.png'
          alt='Credit Card'
          id='credit-card'
        />
      </div>
      <div className='section'>
        <img
          src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/bitcoin.png'
          alt='Credit Card'
          id='bitcoin'
        />
      </div>
    </div>
  </StyledAcceptedPayments>
);

export { AcceptedPayments };
