import Button from "../Button";

const cartTotal = () => {
  return (
    <div>
      <div>
        <span>Total</span>
        <span>R$ 40.00 </span>
      </div>
      <Button className={"btn btn-big"}>Remover Todos</Button>
    </div>
  );
};

export default cartTotal;
