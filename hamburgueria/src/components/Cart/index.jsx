import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

import "./style.css";
const Cart = ({ currentCart, setCurrentCart }) => {
  return (
    <>
      <div className="cart-header">
        <h3>Carrinho de Compras</h3>
      </div>
      <ul className="cart-list">
        {currentCart.map((item) => {
          return (
            <CartProduct
              key={item.id}
              name={item.name}
              img={item.img}
              category={item.category}
            />
          );
        })}
      </ul>
      <CartTotal currentCart={currentCart} setCurrentCart={setCurrentCart} />
    </>
  );
};

export default Cart;
