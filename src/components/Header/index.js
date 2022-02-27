function Header() {
  const navItems = [
    {nome: "Home", rota: "/" }, 
    {nome: "Cadastrar cliente", rota: "/cadastrarCliente"}, 
    {nome: "Lista de clientes", rota: "/listaDeClientes"}, 
    {nome: "Cadastrar video", rota: "/cadastrarVideo"},
    {nome: "Lista de videos", rota: "/listaDeVideos"},
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Kessel Labs Produtora</a>
        <button 
          className="navbar-toggler"
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navItems.map(item => (
            <li key={item.nome} className="nav-item">
               <a className="nav-link" href={item.rota}>{item.nome}</a>
             </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;