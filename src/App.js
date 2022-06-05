import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { useState } from "react";

function App() {
  const [stock, setStock] = useState(16);

  const comprarItem = (cant) => {
    stock - cant >= 0 ? setStock(stock - cant) : alert("Stock insuficiente.");
  };
  return (
    <>
      <NavBar />
      <ItemCount stock={stock} initial={1} comprarItem={comprarItem} />
      <ItemListContainer />
    </>
  );
}

export default App;
