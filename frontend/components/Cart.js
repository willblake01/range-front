import styled from 'styled-components';
import { CartStyles } from './styles/CartStyles';
import { CloseButton } from './styles/CloseButton';
import { formatMoney } from '../lib/formatMoney';
import { calcTotalPrice } from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import { Checkout, RemoveFromCart, useUser } from '.';

const CartItem = ({ cartItem }) => {
  const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

  const { item } = cartItem;
  if (!item) return null;

  return (
    <CartItemStyles>
      <img
        width="100"
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
    </CartItemStyles>
  );
}

const Cart = () => {
  const user = useUser();

  if (!user) return null;

  const { cartOpen, closeCart } = useCart();

  const TotalPrice = styled.p`
    margin-bottom: 1rem;
  `;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <h1>{user.firstName} {user.lastName}'s cart</h1>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <TotalPrice>{formatMoney(calcTotalPrice(user.cart))}</TotalPrice>
        <Checkout />
      </footer>
    </CartStyles>
  );
}

export { CartItem, Cart };
