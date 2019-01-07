import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyle = styled.div`
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509884/range-front/mountain-range.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 260px;
  width: 1440px;
`;

const NavStyle = styled.div`
  position: relative;
  top: 206px;
`;

const AlternateHeader = () => (
  <HeaderStyle>
    <NavStyle>
      <Nav />
    </NavStyle>
  </HeaderStyle>
);

export default AlternateHeader;
