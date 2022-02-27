# Sobre o projeto

**Ao baixar o projeto é preciso dar:**
- um npm install para baixar as dependencias
- npm start para startar o front-end
- npm run json-server para startar o json-server

### Sobre a organização do projeto
Busquei organizar o projetos em pastas dentro do src
- api: fake-server
- componentes: componentes do projeto
- pages: páginas de navegação
- utils: Possui constantes e funções a serem reutilizadas

### Sobre o desenvolvimento
- Não sabia como usar o json-server então li a documentação da biblioteca e pesquisei, dessa forma consegui entender melhor e fazer as chamadas GET, POST, PUT e DELETE.
- No front-end usei o react hook, por ser o mais atual, me baseei na documentação react para entender como usar o useState e useEffect.
- Para a navegação utilizei o react-router, olhei a documentação dele para conseguir criar as rotas e pegar valores da url.
- Para a estilização usei o bootstrap.

### Funcionalidades desenvolvidas
- [x] Cadastrar novos clientes
- [x] Visualizar a lista de clientes
- [x] Apagar um cliente
- [x] Bônus: atualização do cadastro do cliente
- [x] Cadastrar um vídeo
- [x] Associar a qual cliente que pediu aquele vídeo. 
- [x] O vídeo também deverá pode ser atualizado como ter seu título alterado, briefing atualizado. 
- [x] Apagar um vídeo 
- [x] Todo vídeo começará no status Pendente.
- [x] Exibir na tela principal uma lista em que o gerente poderá visualizar todos os projetos de vídeo de forma
resumida exibindo: Titulo, Nome do Cliente, telefone do cliente, data de entrega, preço do vídeo e status.
- [x] O sistema deverá exibir um aviso nessa lista se o projeto estiver com a entrega atrasada.
- [x] O gerente poderá visualizar em uma tela os detalhes do projeto e atualizar o status para “Em Produção” ou “Concluído”. 
- **neste último como considerei o status sendo algo do vídeo ao editar o vídeo o gerente consegue atualizar o status ali mesmo.**

### Funcionalidades não desenvolvidas
- Outro bônus é se o sistema conseguir exibir todos os vídeos que um cliente já fez com a produtora.
- O sistema deverá ordenar os projetos por data de atualização.
- O gerente poderá filtrar os vídeos digitando o nome do cliente ou por status para monitorar os projetos em andamento, por exemplo.

### Dificuldades encontradas:
- Para pegar o id da url para editar o cliente/video
- Nunca tinha feito um post, put, delete, então tive que entender o que era.
- Adicionar máscara nos campos ou texto, nunca tinha feito isso, então tive que ler e entender como usar o Regex e algumas funcionalidades do es6 como replace, split.
- Falta de tempo, gostaria de ter feito todas as funcionalidades, mas optei por priorizar as páginas e as operações de criar, editar, deletar e listar.
- Entender como funciona o roteamento, também nunca tinha feito com react e busquei entender para poder fazer a parte de navegação e edição.
- Entender mais sobre o react

### Links de apoio
- https://getbootstrap.com/
- https://reactrouter.com/docs/en/v6
- https://pt-br.reactjs.org/docs/hooks-effect.html
- https://medium.com/weekly-webtips/use-react-with-json-server-and-create-simple-crud-app-b2bf58cd4558
