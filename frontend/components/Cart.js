import styled from 'styled-components';
import { CartStyles } from './styles/CartStyles';
import { CloseButton } from './styles/CloseButton';
import { Logo } from '../components/Logo';
import { formatMoney } from '../lib/formatMoney';
import { useUser } from './User';
import { calcTotalPrice } from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import { RemoveFromCart } from './RemoveFromCart';
import { Checkout } from './Checkout';

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

export const CartItem = ({ cartItem }) => {
  const { item } = cartItem;
  if (!item) return null;

  return (
    <CartItemStyles>
      <img
        width="100"
        src={cartItem.image}
        alt={cartItem.title}
      />
      <div>
        <h3>{cartItem.title}</h3>
        <p>
          {formatMoney(cartItem.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export const Cart = () => {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!user) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Logo>{user.firstName} {user.lastName}'s Cart</Logo>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(user.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
