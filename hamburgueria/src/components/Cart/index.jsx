import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

import "./style.css";
const Cart = () => {
  return (
    <>
      <div className="cart-header">
        <h3>Carrinho de Compras</h3>
      </div>
      <ul className="cart-list">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </ul>
      <CartTotal />
    </>
  );
};

export default Cart;
