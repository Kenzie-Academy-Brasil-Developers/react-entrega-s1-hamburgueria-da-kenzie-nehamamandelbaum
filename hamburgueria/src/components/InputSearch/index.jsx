import { useState } from "react";
import Button from "../Button";

import "./style.css";

const InputSearch = ({ setFilteredProducts, products, filteredProducts }) => {
  const [inputValue, setInputValue] = useState("");

  const showProducts = (inputValue) => {
    console.log("oiiii");
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredProducts(result);
  };

  return (
    <div className="input-search">
      <input
        type="text"
        className="search-input"
        placeholder="Digitar Pesquisa"
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <Button
        className="btn btn-medium btn-green btn-search"
        onClick={() => showProducts(inputValue)}
      >
        Pesquisar
      </Button>
    </div>
  );
};

export default InputSearch;
