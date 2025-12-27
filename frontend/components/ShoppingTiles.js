import Link from 'next/link';
import styled from 'styled-components';

const StyledTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--black);
  width: 100%;
  .tile {
    flex: 1;
    min-width: calc(100% / 3);
    height: 48rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--white);
    font-size: 2.5rem;
    text-decoration: none;
    opacity: 0.42;
    :hover {
      opacity: 0.2;
    }
  }
  #tents-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/shop_tents.jpg') bottom center no-repeat;
    background-size: cover;
  }
  #bags-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_sleepingBags.jpg') bottom center no-repeat;
    background-size: cover;
  }
  #packs-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_backpacks.jpg') bottom center no-repeat;
    background-size: cover;
  }
`;

const ShoppingTiles = () => (
  <StyledTiles>
    <Link href='/products/tents'>
      <div className='tile' id='tents-tile'>
        Shop Tents
      </div>
    </Link>
    <Link href='/products/backpacks'>
      <div className='tile' id='packs-tile'>
        Shop Backpacks
      </div>
    </Link>
    <Link href='/products/sleeping-bags'>
      <div className='tile' id='bags-tile'>
        Shop Sleeping Bags
      </div>
    </Link>
  </StyledTiles>
);

export { ShoppingTiles }
