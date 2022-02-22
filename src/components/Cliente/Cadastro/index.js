import React, { useState } from "react";
import { BASE_URL } from "../../../utils/constants";

function Cadastro() {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  let valoresClientes = {};

  function resetaForm() {
    setCnpj("");
    setNome("");
    setTelefone("");
    setEmail("");
  }

  async function cadastrarValores(cnpj, nome, telefone, email) {
    valoresClientes = {
      id: Math.floor(Math.random() * 1000),
      cnpj: cnpj,
      nome: nome,
      telefone: telefone,
      email: email
    };
    if(cnpj !== "" && nome !== "" && telefone !== "" && email !== "") {
      
    try {
      const response = await fetch(BASE_URL + "clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valoresClientes)
      });

      if (response.ok) {
        console.log("Cadastrado com sucesso");
        resetaForm();
      }

    } catch (e) {
      console.error('Erro ao cadastrar cliente')
    }
  } else {
    console.log("Cadastro inválido, tente novamente");
  }
};

  return (
    <div>
      <h1> Cadastro de Clientes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="CNPJFormControlInput1" className="form-label">CNPJ</label>
          <input
            value={cnpj}
            type="text"
            className="form-control"
            id="CNPJFormControlInput1"
            placeholder="XX.XXX.XXX/XXXX-XX"
            onChange={(evento) => setCnpj(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="NomeFormControlInput1" className="form-label">Nome</label>
          <input
            value={nome}
            type="text"
            className="form-control"
            id="NomeFormControlInput1"
            placeholder="Nome"
            onChange={(evento) => setNome(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="TelefoneFormControlInput1" className="form-label">Telefone</label>
          <input
            value={telefone}
            type="text"
            className="form-control"
            id="TelefoneFormControlInput1"
            placeholder="(XX)XXXXX-XXXX"
            onChange={(evento) => setTelefone(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="EmailFormControlInput1" className="form-label">Email</label>
          <input
            value={email}
            type="email"
            className="form-control"
            id="EmailFormControlInput1"
            placeholder="name@example.com"
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>
        <button
          onClick={() => cadastrarValores(cnpj, nome, telefone, email)}
          type="button"
          className="btn btn-outline-success"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Cadastro;