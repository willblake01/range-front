import React from 'react';
import styled from 'styled-components';

const AcceptedPaymentsStyle = styled.div`
  .accepted-payment {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 580px;
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  }
  #credit-card {
    width: 400px;
    position: relative;
    top: 140px;
    left: 150px;
    text-align: center;
  }
  #bitcoin {
    width: 280px;
    position: relative;
    top: 120px;
    left: 190px;
    text-align: center;
  }
`;

const AcceptedPayments = () => (
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

export default AcceptedPayments;
