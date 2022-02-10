import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // função responsável por resceber o id de algum produto e adicionar o produto ao state currentCart
  const handleClick = (productId) => {
    const foundProduct = products.find(({ id }) => id === productId);
    setCurrentCart([...currentCart, foundProduct]);
  };

  return (
    <div className="App">
      <Header
        setFilteredProducts={setFilteredProducts}
        products={products}
        filteredProducts={filteredProducts}
      />
      <main>
        <section className="products-list">
          <ProductsList
            products={products}
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
        </section>
        <section className="cart-container">
          <Cart currentCart={currentCart} />
        </section>
      </main>
    </div>
  );
}

export default App;
