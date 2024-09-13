<h1 align="center">Fatec Jacareí- DSM 2º SEMESTRE</h1>

# <p>Equipe 💻: TechWizards </p>
<br>

# SOBRE O PROJETO

## <p align="justify">
Com o intuito de desenvolver uma aplicação web, o projeto visa criar um contador calórico que também sugere dietas personalizadas. A proposta foi desenvolvida para os alunos do 2° semestre do curso de Desenvolvimento de Software Multiplataforma (DSM) da FATEC de Jacareí, utilizando metodologias ágeis, especificamente o framework Scrum.

A aplicação web será projetada para ajudar os usuários a monitorar sua ingestão de calorias e obter sugestões de dietas com base em suas necessidades e objetivos de saúde. Utilizando React e TypeScript para a construção da interface e a lógica de negócios, o projeto assegura uma aplicação interativa e robusta. O design da interface será elaborado no Figma, e a estruturação e estilização das páginas serão feitas com HTML5 e CSS3.

Para o gerenciamento dos dados, será utilizado PostgreSQL, que permitirá o armazenamento eficiente e seguro das informações dos usuários. A aplicação também incorporará funcionalidades para o cálculo automático de calorias e a recomendação de dietas, baseadas nas informações fornecidas pelos usuários.

O controle do desenvolvimento e das alterações será gerenciado através de Git e GitHub, com documentação detalhada disponível no Readme.MD. O projeto não apenas proporciona uma solução prática e personalizada para o monitoramento da dieta, mas também serve como uma aplicação real das práticas ágeis e das tecnologias modernas de desenvolvimento web.</p>


<br>
 </p>

## Link para o Trello

Clique [aqui](https://trello.com/b/YUAmGpXq/backlog-list-2-semestre) para acessar o quadro do Trello do projeto.

## SPRINTS

| Sprint | Link        | Início      | Entrega     | Status |
|--------|-------------|-------------|-------------|--------|
| 01     | [Sprint 01](#sprint-1) | 02/09/2024 | 20/09/2024 |      |
| 02     | [Sprint 02](#sprint-2) | 23/09/2024 | 11/10/2024  |      |
| 03     | [Sprint 03](#sprint-3) | 14/10/2024  | 08/11/2024 |      |

<br>

<span id="backlog">

<br>

## :page_with_curl: Product Backlog

### REQUISITOS FUNCIONAIS

## REQUISITOS FUNCIONAIS

| REQUISITO FUNCIONAL_ID | REQUISITOS                                                                                                 | SPRINTS |
|------------------------|------------------------------------------------------------------------------------------------------------|---------|
| RF - 1                 | Criação de um protótipo do site usando Figma                                                               |  #01       |
| RF - 2                 | Criar um Perfil de usuário para ele se cadastre com seus dados, email e senha                              |         |
| RF - 3                 | Usuário deve ser capaz de fazer Login de Acesso utilizando email e senha cadastrados.                      |         |
| RF - 4                 | Usuário deve ser capaz de acessar uma dieta de acordo com as suas necessidades.                           |         |
| RF - 5                 | Acessar uma base de dados com as informações dos alimentos e seus macronutrientes.                        |         |
| RF - 6                 | Registrar e contabilizar os alimentos consumidos ao longo do dia de acordo com a base de dados.           |         |
| RF - 7                 | Acessar o cálculo diário de calorias do site, sendo com o saldo superior ou inferior à meta, acompanhando o progresso. |         |
| RF - 8                 | Ter acesso às calorias e aos macronutrientes dos alimentos consumidos.                                    |         |
| RF - 9                 | Elaborar uma interface intuitiva e dinâmica para visualizar as informações e acompanhar o progresso diário. |         |
| RF - 10                | Visualizar um histórico de ingestão calórica.                                                             |         |
| RF - 11                | Acessar dicas que beneficiam os diferentes tipos de dietas, para uma vida mais saudável.                   |         |

## REQUISITOS NÃO FUNCIONAIS

| REQUISITO NÃO_FUNCIONAL_ID | REQUISITOS                                                                                          | SPRINTS |
|----------------------------|-----------------------------------------------------------------------------------------------------|---------|
| RNF - 1                    | Ter uma resposta rápida e um processo de dados eficiente usando Typescript, Node.js para o backend e Typescript, React para o frontend. |         |
| RNF - 2                    | Ter um banco capaz de acomodar o aumento de usuários e dados mantendo a eficiência e oferecendo um histórico com a utilização do PostgresSQL. |         |
| RNF - 3                    | Ter uma interface dinâmica, responsiva e usual para uma melhor experiência do usuário em diferentes tamanhos de telas. |         |
| RNF - 4                    | Deve ser compatível com os navegadores web, garantindo a execução do Node.JS. |         |
| RNF - 5                    | Ter toda a documentação disponível e registrada na plataforma Github, de forma organizada e bem documentada. |         |
| RNF - 6                    | Implementação de acesso via senha para garantir uma proteção maior ao usuário, com dados manipulados de forma segura. |         |
| RNF - 7                    | Utilizar a metodologia ágil SCRUM para a gestão e acompanhamento do desenvolvimento das tarefas do projeto e suas prioridades. |         |


## :page_with_curl: USER STORIES

<br>

## USER STORIES

| ID REFERÊNCIA                            | REMETENTE | INSTRUÇÃO                                                                                                                                                                | FINALIDADE                                                                                                                                                        |
|------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF - 2 / RF - 3 / RNF - 6                | Usuário   | Quero me registrar com nome, e-mail e senha. E adicionar também informações como idade, peso, gênero, altura e objetivo de saúde ou restrição ao meu perfil.            | Para que eu possa criar uma conta e acessar o site e ele possa recomendar uma dieta com base nas minhas necessidades.                                           |
| RF - 4 / RF - 5 / RF - 6 / RNF - 2       | Usuário   | Quero registrar os alimentos que consumo ao longo do dia, acessar uma base de dados com informações nutricionais sobre alimentos, e acessar uma sugestão de dieta de acordo com o meu cadastro. | Para que eu possa monitorar minha ingestão de calorias e macronutrientes, adicionar alimentos facilmente à minha ingestão diária e seguir um modelo personalizado. |
| RF - 7 / RNF - 1 / RNF - 3 / RNF - 6     | Usuário   | Quero que o site calcule automaticamente o total de calorias com base no meu objetivo de saúde, monitorar a ingestão de calorias e macronutrientes, e ter um relatório diário com minha ingestão total. | Para que eu possa saber se estou atingindo minhas metas de calorias, garantindo uma dieta equilibrada onde consiga revisar meu progresso e seguir minha dieta conforme indicado. |
| RF - 8 / RF - 9 / RNF - 3 / RNF - 4      | Cliente   | Quero uma interface intuitiva, prática e fácil de usar com cores agradáveis, tendo uma visualização clara da ingestão de calorias e macronutrientes, incluindo o saldo positivo ou negativo diário. Ter acesso ao histórico das ingestões anteriores. | Para que o usuário possa visualizar as informações sem dificuldades e acompanhar seu progresso de forma simples e direta.                                           |
| RF - 11 / RNF - 1                       | Cliente   | Quero que o site forneça dicas de saúde para o usuário de forma aleatória.                                                                                             | Para que o usuário possa ter uma experiência interativa e se manter informado sobre dicas saudáveis.                                                             |


<br>


## :page_with_curl: EQUIPE

<br>

| NOME               | FUNÇÃO        | GITHUB                               |
|--------------------|---------------|--------------------------------------|
| Bruna Regra        | Scrum Master  | [regrabru](https://github.com/regrabru)  |
| Pamela Freitas     | Project Owner | [PaamFreitas18](https://github.com/PaamFreitas18)     |
| Raquel Nakamura    | Developer     | [nakamuraraquel](https://github.com/nakamuraraquel) |
| Maria Eduarda      | Developer     | [ferreira-me](https://github.com/ferreira-me) |
| Felipe Correa      | Developer     | [turnupthetaste](https://github.com/turnupthetaste) |
| Pollyana Sousa     | Developer     | [Pollymeowth](https://github.com/Pollymeowth)  |
| Leandro Barbosa    | Developer     | [gmlebc](https://github.com/gmlebc)|

<br>

## LINGUAGENS E FERRAMENTAS
<br>
<p align="left"> 
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
  </a> 
  <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> 
  </a> 
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
  </a> 
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
  </a> 
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
  </a> 
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
  </a> 
  <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
  </a> 
</p>
<br>


<span id="sprint-1">

## :page_with_curl: SPRINT 1 
<p align="justify">Na Sprint 1, estamos focados em estabelecer as bases fundamentais do nosso projeto, com as seguintes atividades principais:

- **Interface Intuitiva e Dinâmica:** Desenvolvimento de uma interface que facilite a visualização das informações e o acompanhamento do progresso diário.
- **Diagramas UML:** Criação dos Diagramas de Caso de Uso, Classe e Sequência para mapear a estrutura e funcionamento do sistema.
- **Modelagem de Banco de Dados:** Elaboração do Diagrama Entidade-Relacionamento (DER) e Modelo Entidade-Relacionamento (MER).
- **Documentação no GitHub:** Registro e organização de toda a documentação do projeto na plataforma GitHub.
- **Metodologia SCRUM:** Aplicação da metodologia ágil SCRUM para gestão e acompanhamento das tarefas.
- **Login de Acesso:** Implementação da funcionalidade de login com email e senha cadastrados.

</p>

<br>

