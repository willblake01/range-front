import styled from 'styled-components';
import { calcTotalPrice, formatMoney, useCart } from '../lib';
import { StyledCloseButton, LargeButton, RemoveFromCart, useUser } from '.';

const StyledCart = styled.div`
  padding: 20px;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    /* display: grid;
    grid-template-columns: auto auto; */
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0 0 1rem 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

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
