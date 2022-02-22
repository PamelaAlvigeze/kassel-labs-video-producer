import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import Titulo from "../../Titulo";

function CadastroVideo() {
	const [titulo, setTitulo] = useState("");
	const [briefing, setBriefing] = useState("");
	const [preco, setPreço] = useState("");
	const [data, setData] = useState("");
	const [listaClientes, setListaClientes] = useState([]);

	let valoresVideos = {};

	function resetaForm() {
		setTitulo("");
		setBriefing("");
		setPreço("");
		setData("");
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

	useEffect(() => {
		getClientes();
	}, []);


	async function cadastraVideo(titulo, briefing, preco, data) {
		valoresVideos = {
			id: Math.floor(Math.random() * 1000),
			titulo: titulo,
			briefing: briefing,
			preco: preco,
			data: data
		};

		if (titulo !== "" && briefing !== "" && preco !== "" && data !== "") {
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
			<Titulo text="Cadastro de Video" />
			<form>
				<div className="mb-3">
					<label for="tituloFormControlInput1" className="form-label">Titulo do video</label>
					<input
						value={titulo}
						type="text"
						className="form-control"
						id="tituloFormControlInput1"
						placeholder="Crie um titulo"
						onChange={(evento) => setTitulo(evento.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label for="BriefingFormControlTextarea1" className="form-label">Briefing</label>
					<textarea
						value={briefing}
						className="form-control"
						id="BriefingFormControlTextarea1"
						rows="2"
						placeholder="Descrição de como sera seu video"
						onChange={(evento) => setBriefing(evento.target.value)} />

				</div>
				<div className="mb-3">
					<label for="precoFormControlInput1" className="form-label">Preço</label>
					<input
						value={preco}
						type="text"
						className="form-control"
						id="preçoFormControlInput1"
						placeholder="R$"
						onChange={(evento) => setPreço(evento.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label for="dataFormControlInput1" className="form-label">Data de entrega</label>
					<input
						value={data}
						type="text"
						className="form-control"
						id="dataFormControlInput1"
						placeholder="xx/xx/xxxx"
						onChange={(evento) => setData(evento.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label for="clienteFormControlSelect" className="form-label">Cliente</label>
					<select className="form-select" aria-label="Default select example" id="clienteFormControlSelect">
						{listaClientes.map((cliente) =>
							<option value={cliente.cnpj}>{cliente.nome}</option>
						)}
					</select>
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
