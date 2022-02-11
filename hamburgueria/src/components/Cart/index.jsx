import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

import "./style.css";
const Cart = ({ currentCart, setCurrentCart }) => {
  return (
    <div className="cart-flex-center">
      <div className="cart-header">
        <h3>Carrinho de Compras</h3>
      </div>
      <ul className="cart-list">
        {currentCart.length > 0 ? (
          currentCart.map((item) => {
            return (
              <CartProduct
                key={item.id}
                name={item.name}
                img={item.img}
                category={item.category}
                currentCart={currentCart}
                setCurrentCart={setCurrentCart}
                id={item.id}
              />
            );
          })
        ) : (
          <div className="empty-cart-text">
            <h3>Sua sacola está vazia! </h3>
            <p>Adicione itens! </p>
          </div>
        )}
      </ul>
      <CartTotal currentCart={currentCart} setCurrentCart={setCurrentCart} />
    </div>
  );
};

export default Cart;
