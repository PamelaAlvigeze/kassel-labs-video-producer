import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/constants";

function ListaVideos() {

  const [listaVideos, setListaVideos] = useState([]);

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

  useEffect(() => {
    getVideos();
  }, []);

  if (listaVideos && listaVideos.length > 0) {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Briefing</th>
            <th>Preco</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaVideos.map((video) =>
            <tr key={video.id}>
              <th>{video.id}</th>
              <th>{video.titulo}</th>
              <th>{video.briefing}</th>
              <th>{video.preco}</th>
              <th>{video.data}</th>
              <th>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => removeVideo(video.id)}
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

  return <h4>Nenhum video encontrado :(</h4>
}

export default ListaVideos;

