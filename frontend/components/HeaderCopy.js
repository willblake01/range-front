import React from 'react';
import styled from 'styled-components';

const CopyStyle = styled.div`
  .header-copy {
    align-self: flex-start;
    position: relative;
    top: 120px;
    left: 132px;
    line-height: 27px;
    color: ${props => props.theme.darkOrange};
    opacity: .9;
      #first-line {
        font-family: AbrilFatface-Regular;
        font-size: 40px;
      }

      #second-line {
        font-family: AbrilFatface-Regular;
        font-size: 88px;
      }

      #third-line {
        font-family: Raleway-Medium;
        font-size: 20px;
        line-height: 26px;
      }
}
`;

const HeaderCopy = () => (
  <CopyStyle>
    <div className='header-copy'>
      <p id='first-line'>For the love of</p>
      <p id='second-line'>OUTDOOR</p>
      <p id='third-line'>Whether you're a weekend warrior or a Navy SEAL, we've got you covered.</p>
    </div>
  </CopyStyle>
)

export default HeaderCopy;
