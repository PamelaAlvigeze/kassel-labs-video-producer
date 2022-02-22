import React, { useState } from "react";
import { BASE_URL } from "../../../utils/constants";

function CadastroVideo() {
	const [titulo, setTitulo] = useState("");
	const [briefing, setBriefing] = useState("");
	const [preco, setPreço] = useState("");
	const [data, setData] = useState("");
	let valoresVideos = {};


	function resetaForm() {
		setTitulo("");
		setBriefing("");
		setPreço("");
		setData("");
	  }

	async function cadastraVideo(titulo, briefing, preco, data) {
	valoresVideos = { 
		id: Math.floor(Math.random() * 1000), 
		titulo: titulo, 
		briefing: briefing, 
		preco: preco,
		data: data 
	};

	if(titulo !== "" && briefing !== "" && preco !== "" && data !== "") {
      
		try {
		  const response = await fetch(BASE_URL + "videos", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(valoresVideos)
		  });
	
		  if (response.ok) {
			console.log("Cadastrado com sucesso");
			resetaForm();
		  }
	
		} catch (e) {
		  console.error('Erro ao cadastrar video')
		}
	  } else {
		console.log("Cadastro inválido, tente novamente");
	  }
	};
	
	return (
		<div>
			<h1> Cadastro de video</h1>
			<form>
				<div class="mb-3">
					<label for="tituloFormControlInput1" class="form-label">Titulo do video</label>
					<input
						value={titulo}
						type="text"
						className="form-control"
						id="tituloFormControlInput1"
						placeholder="crie um titulo"
						onChange={(evento) => setTitulo(evento.target.value)}
					/>
				</div>

				<div class="mb-3">
					<label for="BriefingFormControlTextarea1" className="form-label">Briefing</label>
					<textarea
						value={briefing}
						class="form-control"
						id="BriefingFormControlTextarea1"
						rows="2"
						onChange={(evento) => setBriefing(evento.target.value)} />

				</div>
				<div class="mb-3">
					<label for="precoFormControlInput1" class="form-label">preço</label>
					<input
						value={preco}
						type="text"
						className="form-control"
						id="preçoFormControlInput1"
						placeholder="R$"
						onChange={(evento) => setPreço(evento.target.value)}
					/>
				</div>
				<div class="mb-3">
					<label for="dataFormControlInput1" class="form-label">data</label>
					<input
						value={data}
						type="text"
						className="form-control"
						id="dataFormControlInput1"
						placeholder="08/05/2002"
						onChange={(evento) => setData(evento.target.value)}
					/>
				</div>
				<button 
					type="button" 
					className="btn btn-outline-success"
					onClick={() => cadastraVideo(titulo, briefing, preco, data)} 
				>
					Cadastrar
				</button>
			</form>
		</div>
	)
}
export default CadastroVideo;
