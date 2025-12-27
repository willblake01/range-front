import styled from 'styled-components';
import { formatMoney } from '../../../lib';
import { RemoveFromCart } from '../..';

const StyledCartItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1rem 0;
  border-bottom: 0.1rem solid var(--lightGrey);
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  const { item } = cartItem;
  if (!item) return null;

  return (
    <StyledCartItem>
      <img
        width='100'
        src={item.image}
        alt={item.title}
      />
      <div>
        <h3>{item.title}</h3>
        <p>
          {formatMoney(item.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(item.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </StyledCartItem>
  );
};

export { CartItem };
