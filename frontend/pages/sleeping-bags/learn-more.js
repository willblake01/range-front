import styled from 'styled-components';
import { AlternateHeader, Footer } from '../../components';

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

const SectionHeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 1040px;
        margin-bottom: 8px;
    }
`;

const LearnMore = () => (
  <>
    <AlternateHeader />
    <StyledLearnMore>
      <SectionHeaderStyle>
        <h1>How to Choose a Sleeping Bag</h1>
        <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/choose_sleepingbag.jpg' alt='sleeping bags' />
      </SectionHeaderStyle>
      <p>While backpacking bags focus on minimizing weight, sleeping bags for car or family camping are all about comfort. What's
      the best sleeping bag for you? This article discusses what features to look for when shopping for a sleeping bag
      for car camping.
      </p>

      <h2>Temperature Rating</h2>
      <p>A sleeping bag's temperature rating identifies the lowest temperature at which a bag is intended to keep the average
      sleeper warm. When a bag is described as a '20-degree bag,' it means that most users should remain comfortable if
      the air temperature drops no lower than 20°F. These ratings assume that the sleeper is wearing a layer of long underwear
      and using a sleeping pad under the bag.
      Metabolism varies from person to person, and sleeping bag temperature ratings vary from one manufacturer to the next.
      Use these ratings as a guide only—not a guarantee.
      Sleeping bags are typically categorized like this:</p>
      <table>
        <tr>
          <th>Bag Type</th>
          <th>Temperature Rating</th>
        </tr>
        <tr>
          <td>Summer Season</td>
          <td> +35° and higher</td>
        </tr>
        <tr>
          <td>3-Season</td>
          <td> +10° to +35°</td>
        </tr>
        <tr>
          <td>Winter</td>
          <td> +10° and lower</td>
        </tr>
      </table>
      <p>Note: Most camping bags feature a temperature rating between +15°F and +50°F.
      Select a sleeping bag with a temperature rating a bit lower than the lowest temperature you expect to encounter.
      If you're headed for near-freezing temperatures, then choose a 20°F bag instead of a 35°F bag. If temperatures remain
      higher than expected, you can easily vent the bag to provide more air circulation.</p>

      <h2>Shape</h2>
      <p>Sleeping bags keep you warm by trapping and holding a layer of 'dead' (non-circulating) air next to your body. Your body
      heat warms this dead air, and the bag forms a barrier between it and the colder ground or outside air. The less air
      space there is to heat, the faster you warm up and stay warm. Camping bags are roomier than backpacking bags for
      greater comfort, with the tradeoff being less efficient warming of this dead space.</p>
      <h4>Rectangular</h4>
      <p>Most camping bags are designed with a rectangular shape for maximum comfort and roominess. If you choose 2 bags with
      compatible zippers, it's easy to mate them and create a double bed. You can mate bags if one bag has a 'right-hand'
      zipper and the other a 'left-hand' zipper. (Note: A right-hand zip means the bag opens and closes to your right when
      you are lying in the bag on your back.) The zippers also need to be the same size, style and roughly the same length.
      You can lay 2 bags on a queen-size air mattress for the utmost in outdoor sleeping comfort.</p>
      <h4>Semirectangular (or barrel-shaped)</h4>
      <p>These can be used for both camping and backpacking. Their tapered design offers greater warmth and efficiency than rectangular
      bags, but they're still plenty roomy for a comfortable night's sleep. They are popular with larger-frame backpackers
      or restless sleepers who don't like the tight fit of a mummy bag.</p>
      <h4>Mummy</h4>
      <p>If you think you’ll be doing some backpacking as well as car camping, you may want to choose a mummy bag. Mummy-shaped
      bags have narrow shoulder and hip widths in order to maximize warmth and reduce weight. However, some people have
      trouble getting comfortable in these more restrictive bags.</p>
      <h4>Double-wide</h4>
      <p>Designed to comfortably sleep 2 people, roomy double-wide bags can be combined with an air mattress (or foam sleeping
      pad) for a cozy night's sleep. Most models zip apart to create 2 individual bags.</p>
  </StyledLearnMore>
    <Footer />
  </>
);

export default LearnMore;
