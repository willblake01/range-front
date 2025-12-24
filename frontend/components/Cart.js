import styled from 'styled-components';
import { calcTotalPrice, formatMoney, useCart } from '../lib';
import { StyledCloseButton, LargeButton, RemoveFromCart, useUser } from '.';
import { StyledCart } from './Cart.styles';

const StyledCartItem = styled.li`
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

const StyledTotalPrice = styled.p`
  margin-bottom: 1rem;
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

const Cart = () => {
  const { user } = useUser();
  const { cartOpen, closeCart } = useCart();

  if (!user) return null;

  return (
    <StyledCart open={cartOpen}>
      <header>
        <h1>{user.firstName} {user.lastName}'s cart</h1>
        <StyledCloseButton onClick={closeCart}>&times;</StyledCloseButton>
      </header>
      <ul>
        {user?.cart?.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <StyledTotalPrice>{formatMoney(calcTotalPrice(user.cart))}</StyledTotalPrice>
      </footer>
      <LargeButton>Checkout</LargeButton>
    </StyledCart>
  );
};

export { CartItem, Cart };
