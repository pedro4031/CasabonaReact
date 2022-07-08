import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import { initializeApp } from "firebase/app";
import Formulario from "./components/Formulario";
import { ToastContainer } from "react-toastify";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBhkaIStd4pylkN2QNyjXB8rjb7B5NvcQo",
    authDomain: "e-commerce-react-cc305.firebaseapp.com",
    projectId: "e-commerce-react-cc305",
    storageBucket: "e-commerce-react-cc305.appspot.com",
    messagingSenderId: "1009653948732",
    appId: "1:1009653948732:web:aed4a0ee51da4ce7227e39",
  };

  initializeApp(firebaseConfig);

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/categorias/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/compra" element={<Formulario />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
      <ToastContainer />
    </>
  );
}

export default App;
