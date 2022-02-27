import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import FormControlInput from "../FormControlInput";
import FormControlTextArea from "../FormControlTextArea";

function FormVideo({ id }) {
  const [titulo, setTitulo] = useState("");
  const [briefing, setBriefing] = useState("");
  const [preco, setPreco] = useState("");
  const [clienteCnpj, setClienteCnpj] = useState("-1");
  const [data, setData] = useState("");
  const [listaClientes, setListaClientes] = useState([]);
  const [statusVideo, setStatusVideo] = useState('');
  const listaStatusVideo = ['Pendente', 'Em produção', 'Concluido'];

  const history = useNavigate();

  function resetaForm() {
    setTitulo("");
    setBriefing("");
    setPreco("");
    setData("");
    setClienteCnpj("");
  }

  function setEditForm(itemVideo) {
    setTitulo(itemVideo.titulo);
    setBriefing(itemVideo.briefing);
    setPreco(itemVideo.preco);
    setData(itemVideo.data);
    setClienteCnpj(itemVideo.cliente.cnpj);
    setStatusVideo(itemVideo.status);
  }

  function getClienteSelecionado() {
    let clienteSelecionado = {};
    listaClientes.map(cliente => {
      if (cliente.cnpj === clienteCnpj) {
        clienteSelecionado = cliente;
      }
    });

    return clienteSelecionado;
  }

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

  async function getVideoId(id) {
    if (id) {
      try {
        const response = await fetch(BASE_URL + "videos" + "/" + id);
        const data = await response.json();
        setEditForm(data);

      } catch (error) {
        console.error('Erro ao carregar a lista de videos')
        return null;
      }
    }
  }

  async function cadastrarVideo(titulo, briefing, preco, data, cliente) {
    let valoresVideos = {};

    valoresVideos = {
      id: Math.floor(Math.random() * 1000),
      titulo: titulo,
      briefing: briefing,
      preco: preco,
      data: data,
      cliente: getClienteSelecionado(),
      status: listaStatusVideo[0],
    };

    if (titulo !== "" && briefing !== "" && preco !== "" && data !== "" && cliente !== -1) {
      try {
        const response = await fetch(BASE_URL + "videos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(valoresVideos)
        });

        if (response.ok) {
          console.log("Cadastrado com sucesso");
          resetaForm();
          history('/listaDeVideos');
        }

      } catch (error) {
        console.error('Erro ao cadastrar video')
      }
    } else {
      console.log("Cadastro inválido, tente novamente");
    }
  };

  async function editarVideo(titulo, briefing, preco, data, cliente, status) {
    let valoresVideos = {};

    valoresVideos = {
      titulo: titulo,
      briefing: briefing,
      preco: preco,
      data: data,
      cliente: getClienteSelecionado(),
      status: statusVideo,
    };

    if (titulo !== "" && briefing !== "" && preco !== "" && data !== "" && cliente !== '-1' && status !== '-1') {
      try {
        const response = await fetch(BASE_URL + "videos" + "/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(valoresVideos)
        });

        if (response.ok) {
          console.log("Editado com sucesso");
          resetaForm();
          history('/listaDeVideos');
        }

      } catch (error) {
        console.error('Erro ao editar video')
      }
    } else {
      console.log("Cadastro inválido, tente novamente");
    }
  };

  useEffect(() => {
    getClientes();
    if (id) {
      getVideoId(id);
    }
  }, []);


  return (
    <form>
      <FormControlInput
        value={titulo}
        onChange={setTitulo}
        id="tituloFormControl"
        type="text"
        label="Titulo do video"
        placeholder="Insira o titulo do seu video"
      />

      <FormControlTextArea
        value={briefing}
        onChange={setBriefing}
        id="briefingFormControl"
        label="Briefing"
        rows="2"
        placeholder="Insira o briefing do seu vídeo"
      />

      <FormControlInput
        value={preco}
        onChange={setPreco}
        id="precoFormControl"
        type="currency"
        label="Preço"
        placeholder="Insira um preço"
      />

      <FormControlInput
        value={data}
        onChange={setData}
        id="dataFormControl"
        type="date"
        label="Data de entrega"
        placeholder="Insira a data de entrega"
      />

      {id && (
        <div className="mb-3">
          <label htmlFor="statusFormControl" className="form-label">Status</label>
          <select
            className="form-select"
            id="statusFormControl"
            value={statusVideo}
            onChange={(evento) => setStatusVideo(evento.target.value)}
          >
            <option value={"-1"}>Selecione o status...</option>
            {listaStatusVideo.map((status, index) =>
              <option key={index + status} value={status}>{status}</option>
            )}
          </select>
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="clienteFormControl" className="form-label">Cliente</label>
        <select
          className="form-select"
          id="clienteFormControl"
          value={clienteCnpj}
          onChange={(evento) => setClienteCnpj(evento.target.value)}
        >
          <option value={"-1"}>Selecione um Cliente...</option>
          {listaClientes.map((cliente) =>
            <option key={cliente.id} value={cliente.cnpj}>{cliente.nome}</option>
          )}
        </select>
      </div>

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => id
          ? editarVideo(titulo, briefing, preco, data, clienteCnpj, statusVideo)
          : cadastrarVideo(titulo, briefing, preco, data, clienteCnpj)}
      >
        {id ? 'Editar' : 'Cadastrar'}
      </button>
    </form>)
}

export default FormVideo;