import Button from "../Button";

import "./style.css";

const cartTotal = ({ currentCart, setCurrentCart }) => {
  const total = currentCart.reduce((acc, curr) => acc + curr.price, 0);

  const removeAllItemsFromCart = () => setCurrentCart([]);

  return (
    <div>
      {currentCart.length > 0 && (
        <>
          <div className="total-container">
            <span className="cart-total-label">Total</span>
            <span className="cart-total-total-price">
              R$ {total.toFixed(2)}{" "}
            </span>
          </div>
          <Button className="btn btn-big" onClick={removeAllItemsFromCart}>
            Remover Todos
          </Button>
        </>
      )}
    </div>
  );
};

export default cartTotal;
