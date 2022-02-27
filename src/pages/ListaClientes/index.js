import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";

function ListaClientes() {

  const [listaClientes, setListaClientes] = useState([]);
  const history = useNavigate();

  async function getClientes() {
    try {
      const response = await fetch(BASE_URL + "clientes");
      const data = await response.json();
      setListaClientes(data);

    } catch (error) {
      console.error('Erro ao carregar a lista de clientes')
      return null;
    }
  }

  async function removeCliente(id) {
    try {
      const response = await fetch(BASE_URL + "clientes" + "/" + id, {
        method: 'DELETE',
      });

      if (response.ok) {
        getClientes();
      }

    } catch (e) {
      console.error('Erro ao remover cliente')
    }
  }

  function editarCliente(clienteId) {
    history('/editarCliente/' + clienteId);
  }

  useEffect(() => {
    getClientes();
  }, []);

  if (listaClientes && listaClientes.length > 0) {
    return (
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Apagar cliente</th>
            <th>Editar cliente</th>
          </tr>
        </thead>
        <tbody>
          {listaClientes.map((cliente) =>
            <tr key={cliente.id}>
              <th>{cliente.id}</th>
              <th>{cliente.cnpj}</th>
              <th>{cliente.nome}</th>
              <th>{cliente.telefone}</th>
              <th>{cliente.email}</th>
              <th>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => removeCliente(cliente.id)}
                >
                  Apagar
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => { editarCliente(cliente.id) }}
                >
                  Editar
                </button>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  return <h4>Nenhum Cliente encontrado :(</h4>
}

export default ListaClientes;