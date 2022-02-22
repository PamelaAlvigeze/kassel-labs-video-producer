import React from "react";
import Cadastro from "./components/Cliente/Cadastro";
import ListaClientes from "./components/Cliente/ListaClientes";
import Header from "./components/Header";
import CadastroVideo from "./components/Video/Cadastro";
import ListaVideos from "./components/Video/ListaVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrarClientes" element={<Cadastro />} />
          <Route path="/listarClientes" element={<ListaClientes />} />
          <Route path="/cadastrarVideos" element={<CadastroVideo />} />
          <Route path="/listarVideos" element={<ListaVideos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

