import styled from 'styled-components';
import { StyledSectionHeader } from '../../../components/styles';
import { AlternateHeader, Footer } from '../../../components';

const StyledLearnMore = styled.div`
  background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  max-width: var(--maxWidth);
  padding: 2rem 14rem 10rem;
  font-size: 1.4rem;
  h1 {
      padding-top: 2rem;
      font-weight: bold;
  }
  h2, h4 {
      font-weight: bold;
  }
  table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
  }
  td,
  th {
      border: 0.1rem solid #dddddd;
      text-align: left;
      padding: 0.8rem;
  }
  tr:nth-child(even) {
      background-color: #dddddd;
  }
  p.boldPara {
      font-weight: bold;
  }
`;

const LearnMore = () => (
  <>
    <AlternateHeader />
    <StyledLearnMore>
      <StyledSectionHeader>
        <h1>How to Choose a Tent</h1>
        <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/choose_tent.jpg' alt='tents' />
      </StyledSectionHeader>
      <p>Car camping with family or friends is a summer pastime for many of us. Whether the campground itself is the main attraction
      or it's simply your base camp for nearby activities, this article will help you find the right camping tent—your
      home away from home.</p>

      <h2>Sleeping Capacity</h2>
      <p>When choosing your tent, first choose a model based on your group's size and whether or not you might need additional
      space for extra friends, gear or dogs. Keep in mind, however, that no industry standard exists that defines per-person
      tent dimensions.
      When evaluating tent capacity ratings, our general advice is this: Assume a close fit. If you seek more room, consider
      upsizing your tent capacity by 1 person, particularly if you or your usual tent companion(s):</p>
      <ul>
        <li>are large people</li>
        <li>are claustrophobic</li>
        <li>toss and turn at night</li>
        <li>sleep better with more than average elbow room</li>
        <li>are bringing a small child or a dog</li>
      </ul>

      <h2>Seasonality</h2>
      <h4>3-Season</h4>
      <p>By far the most popular choice of tents, 3-season tents are lightweight shelters designed for the relatively temperate
      conditions of spring, summer and fall. They are usually equipped with ample mesh panels to boost air flow. Mesh panels
      keep out insects (but can still let in powdery blowing sand). Properly pitched with a taut rainfly, 3-season tents
      can withstand downpours but are not the best choice for sustained exposure to harsh storms, violent winds or heavy
      snow.
      The primary functions of 3-season tents:</p>
      <ul>
        <li>Keep you dry during rain or light snow.</li>
        <li>Shield you from bugs.</li>
        <li>Provide privacy.</li>
      </ul>

      <h4>3- 4-Season</h4>
      <p>Extended-season (3+ season) tents are engineered for prolonged 3-season usage, suitable for summer use but also trips
      in early spring and late fall when moderate snow may be encountered. Their goal: offer a balance of ventilation,
      strength and warmth-retention.
      Typically they include 1 or 2 more poles and fewer mesh panels than pure 3-season models. This makes them sturdier
      and warmer than their 3-season cousins. Extended-season tents are a good choice for those who make frequent trips
      to exposed, high-elevation destinations. While very sturdy, they are not as fully fortified for harsh winter weather
      as 4-season tents.</p>

      <h4>4-Season</h4>
      <p>Engineered to withstand fierce winds and substantial snow loads, mountaineering tents can be used in any season. Their
      chief function, though, is to stand firm in the face of seriously inhospitable weather, principally in winter or
      above treeline.
      They use more poles and heavier fabrics than 3-season tents. Their rounded dome designs eliminate flat roof spaces
      where snow can collect. They offer few mesh panels and rainflies that extend close to the ground. This hinders ventilation
      and can make them feel warm and stuffy in mild weather. But when foul winds begin to howl, a 4-season tent provides
      a reassuring place of refuge.</p>
    </StyledLearnMore>
    <Footer />
  </>
);

export default LearnMore;
