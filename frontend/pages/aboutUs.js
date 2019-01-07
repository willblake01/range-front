import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const AboutUsStyle = styled.div`
  img {
    width: 1040px;
    margin-bottom: 8px;
}

  h1 {
    font-weight: bold;
  }
  .navbar {
    width: 100%;
    background-color: var(--dark-orange);
    opacity: 1;
  }
  .navbar a {
    font-family: Raleway-Regular;
    font-size: 12px;
    color: var(--white);
    padding-right: 30px;
  }
  .container {
    max-width: 1440px;
    max-height: 1800px;
    padding-top: 20px;
    padding-right: 200px;
    padding-bottom: 60px;
    padding-left: 200px;
}
a:hover {
  color: blue;
}
`;

const AboutUs = () => (
    <AboutUsStyle>
      <div class='container'>
        <Link>
          <a href='/'>HOME</a>
        </Link>
        <h1>About RangeFront</h1>
        <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509880/range-front/about_us.jpg' alt='about us' />
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
        <Link>
          <a href='/'>HOME</a>
        </Link>
      </div>
    </AboutUsStyle>
);

export default AboutUs;
