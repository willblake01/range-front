import React from 'react';
import styled from 'styled-components';

const LearnMoreButtonStyle = styled.button`
  position: relative;
  top: 130px;
  left: 132px;
  background-color: ${props => props.theme.green};
`;

const LearnMoreButton = () => (
  <LearnMoreButtonStyle>
    LEARN MORE
  </LearnMoreButtonStyle>
)

export default LearnMoreButton;
