import React from "react"; 
import Cadastro from "./components/Cliente/Cadastro";
import ListaClientes from "./components/Cliente/ListaClientes";
import CadastroVideo from "./components/Video/Cadastro";
import ListaVideos from "./components/Video/ListaVideos";

function App() {  
  return (
    <div className="App">
      {/* <Cadastro /> */}
      <CadastroVideo/>
      <ListaVideos />
      {/* <ListaClientes /> */}
    </div>
  );
  }
  export default App;

