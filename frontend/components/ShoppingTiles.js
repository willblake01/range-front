import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const TileStyle = styled.div`
  .shopping-tiles {
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.theme.black};
  }
  .shop {
      width: 33.33%;
      height: 480px;
      min-width: 480px;
      position: relative;
      text-align: center;
  }
  #shop-tents:hover {
      opacity: 0.45;
  }
  #tents-tile {
      width: 480px;
      height: 480px;
      opacity: 0.34;
  }
  #shop-sleepingBags:hover {
      opacity: 0.45;
  }
  #bags-tile {
      width: 480px;
      height: 480px;
      opacity: 0.36;
  }
  #shop-backpacks:hover {
      opacity: 0.45;
  }
  #packs-tile {
      width: 480px;
      height: 480px;
      opacity: 0.56;
  }
  .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
  }
`;

const ShoppingTiles = () => (
  <TileStyle>
    <div className='shopping-tiles'>
      <div className='shop' id='shop-tents'>
          <Link href='/tents'>
            <a>
              <img
                src='https://res.cloudinary.com/willblake01/image/upload/v1538509890/range-front/shop_tents.jpg'
                alt='Shop Tents'
                id='tents-tile'
              />
              <div className="centered">Shop Tents</div>
            </a>
          </Link>
      </div>
      <div className='shop' id='shop-sleepingBags'>
          <Link href='/sleepingBags'>
            <a>
              <img
                src='https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_sleepingBags.jpg'
                alt='Shop Sleeping Bags'
                id='bags-tile'
              />
              <div className="centered">Shop Sleeping Bags</div>
            </a>
          </Link>
      </div>
      <div className='shop' id='shop-backpacks'>
          <Link href='/backpacks'>
            <a>
              <img
                src='https://res.cloudinary.com/willblake01/image/upload/v1538509889/range-front/shop_backpacks.jpg'
                alt='Shop Backpacks'
                id='packs-tile'
              />
              <div className="centered">Shop Backpacks</div>
            </a>
          </Link>
      </div>
    </div>
  </TileStyle>
)

export default ShoppingTiles;
