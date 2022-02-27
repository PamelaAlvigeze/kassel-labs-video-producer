import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { formataData } from "../../utils/masks";

function Home() {

  const [listaVideos, setListaVideos] = useState([]);

  async function getVideos() {
    try {
      const response = await fetch(BASE_URL + "videos" + "?_sort=data&_order=asc");
      const data = await response.json();
      setListaVideos(data);

    } catch (error) {
      console.error('Erro ao carregar a lista de videos')
      return null;
    }
  }

  function checkStatusDeEntrega(dataEntrega, status) {
    const dataAtual = new Date().toDateString();
    const dataEntregaFinal = new Date(dataEntrega).toDateString();
    const validaDataEntrega = dataEntregaFinal < dataAtual;
    const validaStatusVideo = 'Pendente' || 'Em produção';

    if (status === 'Concluido') {
      return <th className="text-success">Projeto entregue!</th>
    }
    else if (validaStatusVideo && !validaDataEntrega) {
      return <th className="text-danger">Entrega Atrasada</th>
    }

    return <th className="text-primary">Em dia :)</th>
  }

  useEffect(() => {
    getVideos();
  }, []);

  if (listaVideos && listaVideos.length > 0) {
    return (
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th>Titulo do vídeo</th>
            <th>Nome do cliente</th>
            <th>Telefone do cliente</th>
            <th>Data de entrega</th>
            <th>Preço do vídeo</th>
            <th>Status do projeto</th>
            <th>Status da entrega</th>
          </tr>
        </thead>
        <tbody>
          {listaVideos.map((video) =>
            <tr key={video.id}>
              <th>{video.titulo}</th>
              <th>{video.cliente.nome}</th>
              <th>{video.cliente.telefone}</th>
              <th>{formataData(video.data)}</th>
              <th>R${video.preco}</th>
              <th>{video.status}</th>
              {checkStatusDeEntrega(video.data, video.status)}
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  return <h4>Nenhuma informação encontrada :(</h4>
}

export default Home;