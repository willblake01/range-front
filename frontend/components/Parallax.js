import styled from 'styled-components';

const StyledParallax = styled.div`
    background-size: cover;
    background: url('https://res.cloudinary.com/willblake01/image/upload/q_auto/f_auto/v1770301900/range-front/parallax/background-image.webp') no-repeat fixed bottom center;
    width: 100%;
    height: 96rem;
`;

const Parallax = () => (
  <StyledParallax />
)

export { Parallax };
