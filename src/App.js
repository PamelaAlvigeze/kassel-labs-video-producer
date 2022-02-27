import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastraOuEditaCliente from "./pages/CadastraOuEditaCliente";
import ListaClientes from "./pages/ListaClientes";
import CadastraOuEditaVideo from "./pages/CadastraOuEditaVideo";
import ListaVideos from "./pages/ListaVideos";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container my-3 d-flex justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrarCliente" element={<CadastraOuEditaCliente />} />
          <Route path="/editarCliente/:id" element={<CadastraOuEditaCliente />} />
          <Route path="/listaDeClientes" element={<ListaClientes />} />
          <Route path="/cadastrarVideo" element={<CadastraOuEditaVideo />} />
          <Route path="/editarVideo/:id" element={<CadastraOuEditaVideo />} />
          <Route path="/listaDeVideos" element={<ListaVideos />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}
export default App;

