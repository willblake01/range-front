import styled from 'styled-components';
import AlternateHeader from '../components/AlternateHeader';
import Footer from '../components/Footer';

const LearnMoreStyle = styled.div`
    .container {
        max-width: 1440px;
        padding-top: 60px;
        padding-right: 200px;
        padding-bottom: 60px;
        padding-left: 200px;
    }

    img {
        width: 1040px;
        margin-bottom: 8px;
    }

    h1 {
        padding-top: 20px;
        font-weight: bold;
    }

    h2 {
        font-weight: bold;
    }

    h5 {
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
        <LearnMoreStyle>
            <div className='container'>
                <h1>How to Choose Tents for Camping</h1>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/choose_tent.jpg' alt='tents' />
                <p>Car camping with family or friends is a summer pastime for many of us. Whether the campground itself is the main attraction
                    or it's simply your base camp for nearby activities, this article will help you find the right camping tent—your
                    home away from home.</p>

                <h2>Tent Sleeping Capacity</h2>
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

                <h2>Tents Seasonality</h2>
                <h5>3-Season Tents</h5>
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

                <h5>3- 4-Season Tents</h5>
                <p>Extended-season (3+ season) tents are engineered for prolonged 3-season usage, suitable for summer use but also trips
                    in early spring and late fall when moderate snow may be encountered. Their goal: offer a balance of ventilation,
                    strength and warmth-retention.
                    Typically they include 1 or 2 more poles and fewer mesh panels than pure 3-season models. This makes them sturdier
                    and warmer than their 3-season cousins. Extended-season tents are a good choice for those who make frequent trips
                    to exposed, high-elevation destinations. While very sturdy, they are not as fully fortified for harsh winter weather
                    as 4-season tents.</p>

                <h5>4-Season Tents</h5>
                <p>Engineered to withstand fierce winds and substantial snow loads, mountaineering tents can be used in any season. Their
                    chief function, though, is to stand firm in the face of seriously inhospitable weather, principally in winter or
                    above treeline.
                    They use more poles and heavier fabrics than 3-season tents. Their rounded dome designs eliminate flat roof spaces
                    where snow can collect. They offer few mesh panels and rainflies that extend close to the ground. This hinders ventilation
                    and can make them feel warm and stuffy in mild weather. But when foul winds begin to howl, a 4-season tent provides
                    a reassuring place of refuge.</p>

                <h1>How to Choose Sleeping Bags for Camping</h1>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/choose_sleepingbag.jpg' alt='sleeping bags' />
                <p>While backpacking bags focus on minimizing weight, sleeping bags for car or family camping are all about comfort. What's
                    the best sleeping bag for you? This article discusses what features to look for when shopping for a sleeping bag
                    for car camping.
                </p>

                <h2>Sleeping Bag Temperature Rating</h2>
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

                <h2>Sleeping Bag Shape</h2>
                <p>Sleeping bags keep you warm by trapping and holding a layer of 'dead' (non-circulating) air next to your body. Your body
                    heat warms this dead air, and the bag forms a barrier between it and the colder ground or outside air. The less air
                    space there is to heat, the faster you warm up and stay warm. Camping bags are roomier than backpacking bags for
                    greater comfort, with the tradeoff being less efficient warming of this dead space.</p>
                <h5>Rectangular</h5>
                <p>Most camping bags are designed with a rectangular shape for maximum comfort and roominess. If you choose 2 bags with
                    compatible zippers, it's easy to mate them and create a double bed. You can mate bags if one bag has a 'right-hand'
                    zipper and the other a 'left-hand' zipper. (Note: A right-hand zip means the bag opens and closes to your right when
                    you are lying in the bag on your back.) The zippers also need to be the same size, style and roughly the same length.
                    You can lay 2 bags on a queen-size air mattress for the utmost in outdoor sleeping comfort.</p>
                <h5>Semirectangular (or barrel-shaped)</h5>
                <p>These can be used for both camping and backpacking. Their tapered design offers greater warmth and efficiency than rectangular
                    bags, but they're still plenty roomy for a comfortable night's sleep. They are popular with larger-frame backpackers
                    or restless sleepers who don't like the tight fit of a mummy bag.</p>
                <h5>Mummy</h5>
                <p>If you think you’ll be doing some backpacking as well as car camping, you may want to choose a mummy bag. Mummy-shaped
                    bags have narrow shoulder and hip widths in order to maximize warmth and reduce weight. However, some people have
                    trouble getting comfortable in these more restrictive bags.</p>
                <h5>Double-wide</h5>
                <p>Designed to comfortably sleep 2 people, roomy double-wide bags can be combined with an air mattress (or foam sleeping
                    pad) for a cozy night's sleep. Most models zip apart to create 2 individual bags.</p>

                <h1>How to Choose a Backpack</h1>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538509882/range-front/choose_backpack.jpg' alt='backpacks' />
                <p>Planning to buy a new pack for the backcountry? There are three main areas where you'll need to make choices:</p>
                <p className='boldPara'>Backpack capacity: </p>
                <p>The size pack you'll need is tied to the length of your trip and how much weight and bulk you want to carry.</p>
                <p className='boldPara'>Backpack features: </p>
                <p>These are the refinements that affect how the pack works for you.</p>
                <p className='boldPara'>Backpack fit: </p>
                <p>Torso length, not your height, matters most.</p>

                <h2>Types of Backpacks</h2>
                <h5>Weekend (1-3 nights; 30-50 liters)</h5>
                <p>Efficient packers using newer, less-bulky gear can really keep things light on 1- to 3-night trips by using a pack in
                    this range. Be aware that packing light requires self-discipline and careful planning. If you can pull it off, though,
                    the light-on-your-feet rewards are fantastic.</p>
                <h5>Multiday (3-5 nights; 50-80 liters)</h5>
                <p>These are the most popular backpacking packs sold at REI and they're an excellent choice for warm-weather trips lasting
                    3 or more days. 50-80 liter packs are also used for backcountry skiing, for day trips, overnighters and sometimes
                    2-night trips.</p>
                <h5>Extended-trip (5+ nights; 70 liters or larger)</h5>
                <p>Extended trips of 5 days or more usually call for packs of 70 liters or larger. These are also usually the preferred
                    choice for:</p>
                <ul>
                    <li>Winter treks lasting more than 1 night. Larger packs can more comfortably accommodate extra clothing, a warmer sleeping
                        bag and a 4-season tent (which typically includes extra poles).</li>
                    <li>Adults taking young children backpacking. Mom and Dad wind up carrying a lot of kids' gear to make the experience
                        enjoyable for their young ones.</li>
                </ul>

                <h2>Backpack Fit</h2>
                <p>Once you've chosen the type of backpack you want, the next step is to work with an REI sales specialist to expertly fit
                    you to your pack.</p>
                <p>The right fit is one that offers:</p>
                <ul>
                    <li>A size appropriate for your torso length (not your overall height).</li>
                    <li>A comfortably snug grip on your hips.</li>
                </ul>

                <h5>Torso Length</h5>
                <p>Some packs are available in multiple sizes, from extra small to large, which fit a range of torso lengths. These ranges
                    vary by manufacturer and by gender. Check the product specs tab for size details of a specific pack.</p>
                <p>Other packs may feature an adjustable suspension, which can be modified to fit your torso, especially if you're in-between
                    sizes. The drawback: An adjustable harness adds a little weight to a pack.</p>
                <h5>Waist Size</h5>
                <p>The majority of a backpack's weight, 80 percent or more, should be supported by your hips. Backpack hipbelts usually
                    accommodate a wide range of hip sizes, from the mid-20 inches to the mid-40 inches. People with narrow waists sometimes
                    find they cannot make a standard hipbelt tight enough and need a smaller size. Some packs offer interchangeable hipbelts,
                    making it possible to swap out one size for another.</p>
                <h5>Women-Specific Backpacks</h5>
                <p>Because they have smaller frame sizes, women's backpacks often work well for young backpackers of either gender. Torso
                    dimensions are generally shorter and narrower than men's packs. And hipbelts and shoulder straps are contoured with
                    the female form in mind.</p>
                <h5>Youth-Specific Backpacks</h5>
                <p>These typically offer smaller capacities and include an adjustable suspension to accommodate a child's growth. Women's
                    backpacks, with their smaller frame sizes, often work well for young backpackers of either gender. So do small versions
                    of some men's packs.</p>
            </div>
        </LearnMoreStyle>
        <Footer />
    </>
)

export default LearnMore;
