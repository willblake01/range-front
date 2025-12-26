import styled from 'styled-components';
import { StyledSectionHeader } from '../../../components/styles';
import { AlternateHeader, Footer } from '../../../components';

const StyledLearnMore = styled.div`
    background-image: url('https://res.cloudinary.com/willblake01/image/upload/v1538509893/range-front/topography.png');
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    max-width: var(--maxWidth);
    padding: 20px 140px 100px;
    font-size: 1.4rem;
    h1 {
        padding-top: 20px;
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
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
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
        <h1>How to Choose a Backpack</h1>
        <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/choose_backpack.jpg' alt='backpacks' />
      </StyledSectionHeader>
      <p>Planning to buy a new pack for the backcountry? There are three main areas where you'll need to make choices:</p>
      <p className='boldPara'>Backpack capacity: </p>
      <p>The size pack you'll need is tied to the length of your trip and how much weight and bulk you want to carry.</p>
      <p className='boldPara'>Backpack features: </p>
      <p>These are the refinements that affect how the pack works for you.</p>
      <p className='boldPara'>Backpack fit: </p>
      <p>Torso length, not your height, matters most.</p>

      <h2>Types</h2>
      <h4>Weekend (1-3 nights; 30-50 liters)</h4>
      <p>Efficient packers using newer, less-bulky gear can really keep things light on 1- to 3-night trips by using a pack in
      this range. Be aware that packing light requires self-discipline and careful planning. If you can pull it off, though,
      the light-on-your-feet rewards are fantastic.</p>
      <h4>Multiday (3-5 nights; 50-80 liters)</h4>
      <p>These are the most popular backpacking packs sold at REI and they're an excellent choice for warm-weather trips lasting
      3 or more days. 50-80 liter packs are also used for backcountry skiing, for day trips, overnighters and sometimes
      2-night trips.</p>
      <h4>Extended-trip (5+ nights; 70 liters or larger)</h4>
      <p>Extended trips of 5 days or more usually call for packs of 70 liters or larger. These are also usually the preferred
      choice for:</p>
      <ul>
        <li>Winter treks lasting more than 1 night. Larger packs can more comfortably accommodate extra clothing, a warmer sleeping
        bag and a 4-season tent (which typically includes extra poles).</li>
        <li>Adults taking young children backpacking. Mom and Dad wind up carrying a lot of kids' gear to make the experience
        enjoyable for their young ones.</li>
      </ul>

      <h2>Fit</h2>
      <p>Once you've chosen the type of backpack you want, the next step is to work with an REI sales specialist to expertly fit
      you to your pack.</p>
      <p>The right fit is one that offers:</p>
      <ul>
        <li>A size appropriate for your torso length (not your overall height).</li>
        <li>A comfortably snug grip on your hips.</li>
      </ul>

      <h4>Torso Length</h4>
      <p>Some packs are available in multiple sizes, from extra small to large, which fit a range of torso lengths. These ranges
      vary by manufacturer and by gender. Check the product specs tab for size details of a specific pack.</p>
      <p>Other packs may feature an adjustable suspension, which can be modified to fit your torso, especially if you're in-between
      sizes. The drawback: An adjustable harness adds a little weight to a pack.</p>
      <h4>Waist Size</h4>
      <p>The majority of a backpack's weight, 80 percent or more, should be supported by your hips. Backpack hipbelts usually
      accommodate a wide range of hip sizes, from the mid-20 inches to the mid-40 inches. People with narrow waists sometimes
      find they cannot make a standard hipbelt tight enough and need a smaller size. Some packs offer interchangeable hipbelts,
      making it possible to swap out one size for another.</p>
      <h4>Women-Specific Backpacks</h4>
      <p>Because they have smaller frame sizes, women's backpacks often work well for young backpackers of either gender. Torso
      dimensions are generally shorter and narrower than men's packs. And hipbelts and shoulder straps are contoured with
      the female form in mind.</p>
      <h4>Youth-Specific Backpacks</h4>
      <p>These typically offer smaller capacities and include an adjustable suspension to accommodate a child's growth. Women's
      backpacks, with their smaller frame sizes, often work well for young backpackers of either gender. So do small versions
      of some men's packs.</p>
    </StyledLearnMore>
    <Footer />
  </>
);

export default LearnMore;
