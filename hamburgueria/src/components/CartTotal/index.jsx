import Button from "../Button";

import "./style.css";

const cartTotal = () => {
  return (
    <div>
      <div>
        <span className="cart-total-label">Total</span>
        <span className="cart-total-total-price">R$ 40.00 </span>
      </div>
      <Button className="btn btn-big">Remover Todos</Button>
    </div>
  );
};

export default cartTotal;
