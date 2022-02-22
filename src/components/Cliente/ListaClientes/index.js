import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/constants";

function ListaClientes() {

 const [listaClientes, setListaClientes] = useState([]);

 async function getClientes() {
  try {
    const response = await fetch(BASE_URL + "clientes");
    const data = await response.json();
    setListaClientes(data);

  } catch(error) {
    console.error('Erro ao carregar a lista de clientes')
    return null;
  }
}

  async function removeCliente(id) {
    try {
      const response = await fetch(BASE_URL + "clientes" + "/" + id, {
        method: 'DELETE',
      });

      if(response.ok) {
        getClientes();
      }

    }catch(e) {
      console.error('Erro ao remover cliente')
    }
  }

  useEffect(() => {
      getClientes();
    }, []);


  if(listaClientes && listaClientes.length > 0) {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
           <th>Id</th>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
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
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  return <h4>Nenhum Cliente encontrado :(</h4>
}

export default ListaClientes;