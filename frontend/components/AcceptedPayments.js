import styled from 'styled-components';

const AcceptedPaymentsStyle = styled.div`
  .accepted-payment {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 580px;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .section {
    max-width: 720 px;
  }
  #credit-card {
    width: 400px;
    text-align: center;
  }
  #bitcoin {
    width: 280px;
    text-align: center;
  }
`;

export const AcceptedPayments = () => (
  <AcceptedPaymentsStyle>
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
  </AcceptedPaymentsStyle>
)
