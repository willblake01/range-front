import Image from 'next/image'
import styled from 'styled-components';

const StyledAbout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: clamp(2rem, 5vw, 8rem);
  font-size: 1.4rem;

  img {
    margin: 0 auto 5rem;
    display: block;
  }
`;

const About = () => (
  <StyledAbout>
    <Image
      src='https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/about_us.jpg'
      alt='about us'
      height={800}
      width={2000}
    />
    <p>At RangeFront, we love to get outside and play, and we know first-hand the importance of quality outdoor gear. We stand
    behind all our products with a 100% satisfaction guarantee, and we design our own line of award-winning RangeFront
    brand gear and clothing. Whether you're new to outdoor adventure or a seasoned pro, we gladly share our enthusiasm
    for our products—and the trails, slopes and waterways where we play.</p>
    <p>Each year, RangeFront donates millions of dollars to support conservation efforts nationwide and sends dedicated teams
    of volunteers—members, customers and RangeFront employees—to build trails, clean up beaches, restore local habitats
    and more... Through responsible business practices across the company, we strive to reduce our environmental footprint.</p>
    <p>What began as a group of 3 coding buddies is now the nation's largest consumer cooperative. But no matter how large we
    grow, our roots remain firmly planted in the outdoors. Our passion for outdoor adventure is clear, whether you visit
    any of our stores across the country, phone us, or interact with us online.</p>
    <p>By staying true to our roots, we've earned a place on FORTUNE magazine's list of the '100 Best Companies to Work For'
    every year since the rankings began in 1998. We work hard to earn our reputation for quality and integrity every
    day.</p>
    <p>At RangeFront, we inspire, educate and outfit for a lifetime of outdoor adventure and stewardship.</p>
  </StyledAbout>
);

export { About };
