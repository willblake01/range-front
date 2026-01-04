import Image from 'next/image';
import styled from 'styled-components';
import { formatMoney } from '../../../lib';

const StyledOrderItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1rem 0;

  img {
    object-fit: contain;
    background-color: var(--white);
  }

  h3,
  p {
    margin: 0;
  }
`;

const OrderItem = ({ orderItem }) => {
  const { item, quantity } = orderItem;
  if (!item) return null;

  return (
    <StyledOrderItem>
      <Image
        height={130}
        width={220}
        src={item.image}
        alt={item.title}
      />
      <div>
        <h3>{item.brand}</h3>
        <h3>{item.title}</h3>
        <p>
          {formatMoney(item.price * quantity)}-
          <em>
            {quantity} &times; {formatMoney(item.price)} each
          </em>
        </p>
      </div>
    </StyledOrderItem>
  );
};

export { OrderItem };
