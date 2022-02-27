import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants';
import { maskCnpj, maskTelefone } from '../../utils/masks';
import FormControlInput from '../FormControlInput';

function FormCliente({ id }) {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  function setEditForm(cliente) {
    setCnpj(cliente.cnpj);
    setNome(cliente.nome);
    setTelefone(cliente.telefone);
    setEmail(cliente.email);
  }

  function resetaForm() {
    setCnpj("");
    setNome("");
    setTelefone("");
    setEmail("");
  }

  function setMaskTelefone(value) {
    setTelefone(maskTelefone(value));
  }

  function setMaskCnpj(value) {
    setCnpj(maskCnpj(value));
  }

  async function cadastrarCliente(cnpj, nome, telefone, email) {
    let valoresCliente = {};

    valoresCliente = {
      id: Math.floor(Math.random() * 1000),
      cnpj: cnpj,
      nome: nome,
      telefone: telefone,
      email: email
    };

    if (cnpj !== "" && nome !== "" && telefone !== "" && email !== "") {
      try {
        const response = await fetch(BASE_URL + "clientes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(valoresCliente)
        });

        if (response.ok) {
          console.log("Cadastrado com sucesso");
          resetaForm();
          history('/listaDeClientes');
        }

      } catch (erro) {
        console.error('Erro ao cadastrar cliente')
      }
    } else {
      console.log("Cadastro inválido, tente novamente");
    }
  };

  async function getClienteId(id) {
    if (id) {
      try {
        const response = await fetch(BASE_URL + "clientes" + "/" + id);
        const data = await response.json();
        setEditForm(data);

      } catch (error) {
        console.error('Erro ao carregar a lista de clientes');
        return null;
      }
    }
  }

  async function editarCliente(cnpj, nome, telefone, email) {
    let valoresCliente = {};

    valoresCliente = {
      cnpj: cnpj,
      nome: nome,
      telefone: telefone,
      email: email,
    };

    if (cnpj !== "" && nome !== "" && telefone !== "" && email !== "") {
      try {
        const response = await fetch(BASE_URL + "clientes" + "/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(valoresCliente)
        });

        if (response.ok) {
          console.log("Editado com sucesso");
          resetaForm();
          history('/listaDeClientes');
        }

      } catch (e) {
        console.error('Erro ao editar cliente')
      }
    } else {
      console.log("Cadastro inválido, tente novamente");
    }
  };

  useEffect(() => {
    if (id) {
      getClienteId(id);
    }
  }, []);

  return (
    <form>
      <FormControlInput
        value={cnpj}
        onChange={setMaskCnpj}
        id="cnpjFormControl"
        type="text"
        label="CNPJ"
        placeholder="CNPJ"
      />

      <FormControlInput
        value={nome}
        onChange={setNome}
        id="nomeFormControl"
        type="text"
        label="Nome"
        placeholder="Insira seu nome"
      />

      <FormControlInput
        value={telefone}
        onChange={setMaskTelefone}
        id="telefoneFormControl"
        type="tel"
        label="Telefone"
        placeholder="(XX)XXXXX-XXXX"
      />

      <FormControlInput
        value={email}
        onChange={setEmail}
        id="emailFormControl"
        type="email"
        label="Email"
        placeholder="Insira seu email"
      />

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => id
          ? editarCliente(cnpj, nome, telefone, email)
          : cadastrarCliente(cnpj, nome, telefone, email)
        }
      >
        {id ? 'Editar' : 'Cadastrar'}
      </button>
    </form>
  )
}

export default FormCliente;