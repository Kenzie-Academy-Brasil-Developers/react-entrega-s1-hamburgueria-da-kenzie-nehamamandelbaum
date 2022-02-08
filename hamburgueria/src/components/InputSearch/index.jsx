import Button from "../Button";

import "./style.css";

const InputSearch = () => {
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Digitar Pesquisa"
      />
      <Button className="btn btn-medium btn-green">Pesquisar</Button>
    </>
  );
};

export default InputSearch;
