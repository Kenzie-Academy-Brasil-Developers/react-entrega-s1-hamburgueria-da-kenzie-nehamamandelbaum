import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="products-list">
          <ProductsList />
        </section>
        <section className="cart-container">
          <Cart />
        </section>
      </main>
    </div>
  );
}

export default App;
