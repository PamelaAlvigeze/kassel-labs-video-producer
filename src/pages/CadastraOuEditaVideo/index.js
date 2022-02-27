import React from "react";
import Titulo from "../../components/Titulo";
import FormVideo from "../../components/FormVideo";
import { useParams } from "react-router-dom";

function CadastraOuEditaVideo() {
	const { id } = useParams();

	return (
		<div className="w-50">
			<Titulo text={id ? "Editar Video" : "Cadastrar Video"} />
			<FormVideo id={id} />
		</div>
	)
}
export default CadastraOuEditaVideo;
