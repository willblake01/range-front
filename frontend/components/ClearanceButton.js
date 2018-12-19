import React from 'react';
import styled from 'styled-components';

const ClearanceButtonStyle = styled.button`
  background-color: ${props => props.theme.brown};
`;

const ClearanceButton = () => (
  <ClearanceButtonStyle>
    SHOP CLEARANCE
  </ClearanceButtonStyle>
)

export default ClearanceButton;
