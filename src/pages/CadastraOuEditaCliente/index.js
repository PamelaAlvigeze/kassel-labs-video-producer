import React from "react";
import { useParams } from "react-router-dom";
import FormCliente from "../../components/FormCliente";
import Titulo from "../../components/Titulo";

function CadastraOuEditaCliente() {
  const { id } = useParams();

  return (
    <div className="w-50">
      <Titulo text={id ? "Editar Cliente" : "Cadastrar Cliente"}  />
      <FormCliente id={id} />
    </div>
  )
}

export default CadastraOuEditaCliente;