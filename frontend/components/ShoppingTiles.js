import Link from 'next/link';
import styled from 'styled-components';

const StyledTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--black);

  .tiles {
    width: 33.33%;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--white);
    text-decoration: none;
  }
  
  #tents-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/shop_tents.jpg') bottom center no-repeat;
    background-size: cover;
    opacity: 0.42;
    :hover {
      opacity: 0.2;
    }
  }

  #bags-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_sleepingBags.jpg') bottom center no-repeat;
    background-size: cover;
    opacity: 0.42;
    :hover {
      opacity: 0.2;
    }
  }

  #packs-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_backpacks.jpg') bottom center no-repeat;
    background-size: cover;
    opacity: 0.42;
    :hover {
      opacity: 0.2;
    }
  }
`;

const ShoppingTiles = () => (
  <StyledTiles>
    <Link href='/tents'>
      <div className='tiles' id='tents-tile'>
        Shop Tents
      </div>
    </Link>
    <Link href='/backpacks'>
      <div className='tiles' id='packs-tile'>
        Shop Backpacks
      </div>
    </Link>
    <Link href='/sleeping-bags'>
      <div className='tiles' id='bags-tile'>
        Shop Sleeping Bags
      </div>
    </Link>
  </StyledTiles>
)

export default ShoppingTiles;
