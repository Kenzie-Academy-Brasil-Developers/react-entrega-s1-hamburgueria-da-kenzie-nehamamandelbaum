import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

const Cart = () => {
  return (
    <>
      <div>
        <h3>Carrinho de Compras</h3>
      </div>
      <ul>
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
