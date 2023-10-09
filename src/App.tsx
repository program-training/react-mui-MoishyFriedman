import "./App.css";
import { Example } from "./components/Example/Example";
import Basic from "./components/basic/basic";
import Cart from "./components/Cart/cart";
import ModalComponent from "./components/Modal/modal";

function App() {
  return (
    <>
      <Basic />
      <br />
      <Cart />
      <br />
      <ModalComponent />
      <br />
      <Example />{" "}
    </>
  );
}

export default App;
