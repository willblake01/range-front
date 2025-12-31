import Link from 'next/link';
import styled from 'styled-components';

const StyledTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .tile {
    position: relative;
    flex: 1;
    min-width: calc(100% / 3);
    height: 48rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: var(--offWhite);
    font-size: 1.5rem;
    text-decoration: none;
    overflow: hidden;

    /* overlay tint */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      transition: background 0.3s ease;
      z-index: 1;
    }

    &:hover::before {
      background: rgba(0, 0, 0, 0.7);
    }

    span {
      position: relative;
      z-index: 2;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }

  #tents-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/shop_tents.jpg')
      bottom center / cover no-repeat;
  }

  #sleeping-bags-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_sleepingBags.jpg')
      bottom center / cover no-repeat;
  }

  #backpacks-tile {
    background: url('https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_backpacks.jpg')
      bottom center / cover no-repeat;
  }
`;

const ShoppingTiles = () => (
  <StyledTiles>
    <Link
      href={{ pathname: '/products', query: { category: 'tents' } }}
      legacyBehavior
    >
      <a className='tile' id='tents-tile'>
        <span>Shop Tents</span>
      </a>
    </Link>
    <Link
      href={{ pathname: '/products', query: { category: 'backpacks' } }}
      legacyBehavior
    >
      <a className='tile' id='backpacks-tile'>
        <span>Shop Backpacks</span>
      </a>
    </Link>
    <Link
      href={{ pathname: '/products', query: { category: 'sleeping-bags' } }}
      legacyBehavior
    >
      <a className='tile' id='sleeping-bags-tile'>
        <span>Shop Sleeping Bags</span>
      </a>
    </Link>
  </StyledTiles>
);

export { ShoppingTiles }
