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
    const productAlreadyExists = currentCart.includes(foundProduct);
    if (!productAlreadyExists) {
      setCurrentCart([...currentCart, foundProduct]);
    }
  };

  // função responsável por pegar o input do campo de busca e colocar dentro do estado dos filtered products
  const showProducts = (inputValue) => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredProducts(result);
  };

  return (
    <div className="App">
      <Header showProducts={showProducts} />
      <main className="main">
        <section className="products-list">
          {filteredProducts.length > 0 ? (
            <ProductsList
              productsToRender={filteredProducts}
              handleClick={handleClick}
            />
          ) : (
            <ProductsList
              productsToRender={products}
              handleClick={handleClick}
            />
          )}
        </section>
        <section className="cart-container">
          <Cart currentCart={currentCart} setCurrentCart={setCurrentCart} />
        </section>
      </main>
    </div>
  );
}

export default App;
