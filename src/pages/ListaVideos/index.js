import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from 'react-router-dom';
import { formataData } from "../../utils/masks";

function ListaVideos() {

  const [listaVideos, setListaVideos] = useState([]);
  const history = useNavigate();

  async function getVideos() {
    try {
      const response = await fetch(BASE_URL + "videos");
      const data = await response.json();
      setListaVideos(data);

    } catch (error) {
      console.error('Erro ao carregar a lista de videos')
      return null;
    }
  }

  async function removeVideo(id) {
    try {
      const response = await fetch(BASE_URL + "videos" + "/" + id, {
        method: 'DELETE',
      });

      if (response.ok) {
        getVideos();
      }

    } catch (e) {
      console.error('Erro ao remover video')
    }
  }

  function editarVideo(videoId) {
    history('/editarVideo/' + videoId);
  }

  useEffect(() => {
    getVideos();
  }, []);

  if (listaVideos && listaVideos.length > 0) {
    return (
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Briefing</th>
            <th>Preco</th>
            <th>Data</th>
            <th>Status</th>
            <th>Apagar video</th>
            <th>Editar video</th>
          </tr>
        </thead>
        <tbody>
          {listaVideos.map((video) =>
            <tr key={video.id}>
              <th>{video.id}</th>
              <th>{video.titulo}</th>
              <th>{video.briefing}</th>
              <th>R${video.preco}</th>
              <th>{formataData(video.data)}</th>
              <th>{video.status}</th>
              <th>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => removeVideo(video.id)}
                >
                  Apagar
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => editarVideo(video.id)}
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

  return <h4>Nenhum video encontrado :(</h4>
}

export default ListaVideos;
