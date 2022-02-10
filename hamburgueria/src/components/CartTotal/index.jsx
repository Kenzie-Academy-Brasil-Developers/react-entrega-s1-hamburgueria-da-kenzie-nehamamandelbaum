import Button from "../Button";

import "./style.css";

const cartTotal = ({ currentCart }) => {
  const total = currentCart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <div>
        <span className="cart-total-label">Total</span>
        <span className="cart-total-total-price">R$ {total.toFixed(2)} </span>
      </div>
      <Button className="btn btn-big">Remover Todos</Button>
    </div>
  );
};

export default cartTotal;
