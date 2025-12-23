const calcTotalPrice = (cart) => {
  return cart?.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally; // products can be deleted, but they could still be in your cart
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

export { calcTotalPrice };
