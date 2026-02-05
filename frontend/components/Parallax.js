import styled from 'styled-components';

const StyledParallax = styled.div`
  background: url('https://res.cloudinary.com/willblake01/image/upload/v1770301900/range-front/rock_climber.webp') bottom center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 96rem;
`;

const Parallax = () => (
  <StyledParallax />
)

export { Parallax };
