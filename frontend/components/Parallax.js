import styled from 'styled-components';

const ParallaxStyle = styled.div`
  background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509888/range-front/rock_climber.jpg') bottom center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 680px;
`;

const Parallax = () => (
  <ParallaxStyle />
)

export default Parallax;
