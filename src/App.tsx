import "./App.css";
import { Example } from "./components/Example/Example";
import Basic from "./components/basic/basic";
import Cart from "./components/Cart/cart";
function App() {
  return (
    <>
      <Basic />
      <Cart />
      <Example />{" "}
    </>
  );
}

export default App;
