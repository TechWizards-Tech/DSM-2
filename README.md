
<h1 align="center">Fatec Jacareí- DSM 2º SEMESTRE</h1>

# <p>Equipe 💻: TechWizards </p>

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
<br>

## SPRINTS

| Sprint | Link        | Início      | Entrega     | Status |
|--------|-------------|-------------|-------------|--------|
| 01     | [Sprint 01](#sprint-1) | 02/09/2024 | 20/09/2024 | ✔    |
| 02     | [Sprint 02](#sprint-2) | 23/09/2024 | 11/10/2024 | ✔   |
| 03     | [Sprint 03](#sprint-3) | 14/10/2024  | 08/11/2024 | ✔   |

<br>

<span id="backlog">

<br>

## :page_with_curl: Product Backlog

## REQUISITOS FUNCIONAIS

| REQUISITO FUNCIONAL_ID | REQUISITOS                                                                                                | SPRINTS |
|------------------------|-----------------------------------------------------------------------------------------------------------|---------|
| RF - 1                 | Criação de um protótipo do site usando Figma                                                              | #01✔        |
| RF - 2                 | Criação e ajustes da interface onde o usuário faça login e cadastro com seu nome, email e senha.          | #01✔#02✔    |
| RF - 3                 | Usuário é capaz de fazer Login de Acesso utilizando email e senha cadastrados.                            | #02✔        |
| RF - 4                 | Usuário deve ser capaz de acessar uma opção de dieta de acordo com as suas necessidades.                  | #03✔       |
| RF - 5                 | Acessar uma base de dados com as informações dos alimentos e seus macronutrientes.                        | #03✔       |
| RF - 6                 | Registrar e contabilizar os alimentos consumidos ao longo do dia de acordo com a base de dados.           |   #03✔     |
| RF - 7                 | Acessar um cálculo diário de calorias, sendo com o saldo superior ou inferior à meta, acompanhando o progresso. | #03✔     |
| RF - 8                 | Implementação e exibição das dicas para os usuários dentro da plataforma.                                 |   #03✔       |
| RF - 9                 | Elaborar uma interface intuitiva e dinâmica para visualizar as informações e acompanhar o progresso diário. |  #01✔      |
| RF - 10                | Visualizar um histórico de ingestão calórica.                                                             |#03✔          |
| RF - 11                | Acessar dicas que beneficiam os diferentes tipos de dietas, para uma vida mais saudável.                   |  #01✔       |
<br>

## REQUISITOS NÃO FUNCIONAIS

| REQUISITO NÃO_FUNCIONAL_ID | REQUISITOS                                                                                          | SPRINTS |
|----------------------------|-----------------------------------------------------------------------------------------------------|---------|
| RNF - 1                    | Usar Typescript, Node.js para o backend e Typescript, React para o frontend. |   #01✔#02✔#03✔    |
| RNF - 2                    | Ter um banco capaz de acomodar o aumento de usuários e dados mantendo a eficiência e oferecendo um histórico com a utilização do PostgresSQL. |  #01✔ #03✔    |
| RNF - 3                    | Ter uma interface dinâmica, responsiva e usual para uma melhor experiência do usuário em diferentes tamanhos de telas. |  #03✔     |
| RNF - 4                    | Deve ser compatível com os navegadores web, garantindo a execução do Node.JS. | #01✔           |
| RNF - 5                    | Ter toda a documentação disponível e registrada na plataforma Github, de forma organizada e bem documentada. |  #01✔#02✔ #03✔   |
| RNF - 6                    | Conexão do backend com o banco de dados | #02✔ #03✔   |
| RNF - 7                    | Utilizar a metodologia ágil SCRUM para a gestão e acompanhamento do desenvolvimento das tarefas do projeto e suas prioridades. | #01✔#02✔#03✔     |
<br>

## :page_with_curl: USER STORIES

<br>

## USER STORIES
| ID REFERÊNCIA                            | REMETENTE | INSTRUÇÃO                                                                                                                                                                | FINALIDADE                                                                                                                                                        |
|------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF - 2 / RF - 3 / RNF - 3             | Usuário   | Quero me registrar com nome, e-mail e senha. E adicionar também informações como idade, peso, gênero, altura e objetivo de saúde ou restrição ao meu perfil.            | Para que eu possa criar uma conta e acessar o site e ele possa recomendar uma dieta com base nas minhas necessidades.                                           |
| RF - 4 / RF - 5 / RF - 6 / RNF - 2     | Usuário   | Quero registrar os alimentos que consumo ao longo do dia, acessar uma base de dados com informações nutricionais sobre alimentos, e acessar uma sugestão de dieta de acordo com o meu cadastro. | Para que eu possa monitorar minha ingestão de calorias e macronutrientes, adicionar alimentos facilmente à minha ingestão diária e seguir um modelo personalizado. |
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

### • Sprint Backlog
<br>

| ID REFERENCIA | Pioridade (Scrum Poker Planning) | REQUISITO DA SPRINT| Responsável |TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|--------------------|---------------|-----------------|-----------------|------------------|
|  RF - 1    | 13 |Estruturar os Diagramas de Caso de Uso, Classe e Sequencia.(UML) |Maria Eduarda e Pamela | ✔  |✔  |
| RF - 1/RF - 9/RNF - 1/RNF - 4 | 21 |Elaborar uma interface intuitiva e dinâmica para visualizar as informações e acompanhar o progresso diário.|Raquel, Leandro e Pollyana  | ✔  |✔  |
|  RNF - 2   | 34 |Criação do DER e do MER Banco de Dados |Felipe | ✔ | ✔ |
|  RF - 2 /RNF - 1  | 21 |1ª parte - Cadastro e login de usuário (sem implementação) |Pollyana e Leandro|  ✔  |✔  |
|  RF - 11   | 8 |Pesquisa e coleta de dicas que beneficiam os diferentes tipos de dietas, para uma vida mais saudável  |Pamela (sem implementação) | ✔  |✔  |
| RNF - 5    | 8 |Ter toda a documentação disponível e registrada na plataforma Github, de forma organizada e bem documentada. |Bruna e Pollyana   | ✔  |✔  |
|  RNF - 7    | 8 |Utilizar a metodologia ágil SCRUM para a gestão e acompanhamento do desenvolvimento das tarefas do projeto e suas prioridades.|Bruna  | ✔  |✔  |

<br>

### • Burndown Sprint 1
<br>

![Burndown 1](https://github.com/user-attachments/assets/187d8d0a-54d0-45b6-9b04-827e873a5fd8)

### • Sprint Retrospective

Na Sprint 1, focamos na criação das bases do projeto, incluindo uma interface intuitiva, diagramas UML, modelagem de banco de dados, documentação no GitHub, aplicação da metodologia SCRUM. A interface desenvolvida a princípio no Figma foi bem desenvolvida já. Os diagramas UML foram elaborados com sucesso, mas necessitam de mais detalhes e entendimento compartilhado. A modelagem de banco de dados foi semi-concluída, necessitando apenas algumas revisões. A documentação no GitHub foi bem organizada. A metodologia SCRUM foi aplicada sem problemas também. 

Na próxima sprint, além de melhorar os pontos mencionados, avançaremos na continuidade do desenvolvimento das páginas da interface, como login e cadastro, aprimorando a navegação e a experiência do usuário. Também detalharemos mais os diagramas UML, alinharemos melhor a modelagem de dados, manteremos a documentação atualizada. Essas ações visam garantir a evolução contínua e o sucesso do projeto.
<br>


****
<br>

<span id="sprint-2">

## :page_with_curl: SPRINT 2 
<p align="justify"> Na Sprint 2, fizemos progresso no desenvolvimento da nossa aplicação, focando em três áreas principais:

- **Conexões**: Fizemos a conexão do back-end com o banco de dados.
 
- **Tabela dos Alimentos**: Inserimos os dados na base de dados, registrando informações detalhadas sobre os alimentos e seus macronutrientes. Embora consigamos filtrar os macronutrientes disponíveis, os usuários ainda não têm acesso direto a essa base.

- **Preparação para Inserção de Dados na Dieta**: Embora os usuários ainda não consigam acessar suas dietas personalizadas, já deixamos os itens cadastrados no banco de dados. Isso prepara o caminho para que, na próxima sprint, os usuários possam registrar e acompanhar suas refeições conforme suas necessidades nutricionais. 

- **Interface Intuitiva e Dinâmica**: Desenvolvemos uma primeira interface de usuário intuitiva e dinâmica, na qual implementamos as funcionalidades de login e cadastro, permitindo que os usuários criem suas contas de forma segura. Essa base é essencial para a personalização da experiência do usuário no futuro.

Estamos avançando no projeto e para a próxima sprint, vamos focar em usuario acessar perfil e se conectar às suas dietas, e otimizando a interface da aplicação.
<br>

### • Sprint Backlog
<br> 


| ID REFERENCIA |Pioridade (Scrum Poker Planning) | REQUISITO DA SPRINT| Responsável |TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|--------------------|---------------|-----------------|-----------------|------------------|
| RF - 1    | 13 | Ajuste dos Diagramas de Caso de Uso, Classe e Sequencia.(UML) | Maria Eduarda e Pamela | ✔ | ✔ |
| RF - 2 | 21 | Criação e ajustes da interface onde o usuário faça login e cadastro com seu nome, email e senha. | Raquel, Leandro, Maria Eduarda e Pollyana | ✔ | ✔ |
| RF - 3 | 34 | Usuário é capaz de fazer Login de Acesso utilizando email e senha cadastrados. | Felipe, Leandro e Pollyana  | ✔ | ✔ |
| RNF - 6  | 21 | Conexão do backend com o banco de dados | Pollyana e Felipe | ✔ | ✔ |

<br>

### • Burndown Sprint 2
<br>

![burndown 2](https://github.com/user-attachments/assets/9086c0cd-481e-4f00-8133-48d4932b8da9)


### • Sprint Retrospective

Realizamos a conexão do back-end com o banco de dados, começando pela Tabela dos Alimentos, onde inserimos dados detalhados sobre os alimentos e seus macronutrientes. Embora a filtragem dos macronutrientes esteja funcionando, os usuários ainda não têm acesso direto a essas informações. Também preparamos a Inserção de Dados na Dieta, com itens já cadastrados no banco, preparando o ambiente para que, na próxima e ultima sprint, os usuários possam registrar e acompanhar suas refeições conforme suas necessidades nutricionais. Além disso, implementamos as funcionalidades de login e cadastro, permitindo aos usuários criarem suas contas de forma segura.

Na Sprint 3, avançaremos permitindo que os usuários acessem seus perfis, o contador de calores e se conectem às suas dietas personalizadas. E otimizaremos a interface da aplicação, aprimorando a navegação e a experiência do usuário, para torná-la ainda mais fluida e intuitiva.

****
<br>

<span id="sprint-3">

## :page_with_curl: SPRINT 3 

Na Sprint 3, concluímos o desenvolvimento da nossa aplicação, integrando funcionalidades que aprimoram a experiência do usuário de maneira significativa:

**Interface Responsiva e Dinâmica:** Finalizamos a criação de uma interface que se adapta perfeitamente a diferentes tamanhos de tela, tentando manter a experiência intuitiva e fluida em qualquer dispositivo.

**Questionário Personalizado:** Implementamos um questionário inicial que coleta informações sobre gênero, objetivo, nível de atividade física, peso e altura. Essa personalização permite que os usuários tenham dietas mais alinhadas às suas necessidades.

**Acesso à Base de Dados de Alimentos:** Os usuários agora têm acesso à nossa base de dados, onde podem consultar informações detalhadas sobre alimentos e seus macronutrientes.

**Registro de Alimentos Consumidos:** Implementamos a funcionalidade que permite registrar e contabilizar os alimentos consumidos ao longo do dia, facilitando o acompanhamento das dietas.

**Cálculo Diário de Calorias:** Adicionamos um recurso que fornece um cálculo diário de calorias, permitindo aos usuários verificar se estão acima ou abaixo de suas metas e acompanhar seu progresso de forma eficaz.

**Gerenciamento da Dieta:** Os usuários podem facilmente incluir ou excluir itens de suas dietas, proporcionando um controle maior sobre suas escolhas alimentares.

**Histórico de Ingestão Calórica:** Implementamos uma funcionalidade que permite visualizar um histórico da ingestão calórica, ajudando na análise e reflexão sobre as decisões alimentares do usuário.

**Opções de Dieta Personalizadas:** A aplicação agora oferece opções de dieta ajustadas às necessidades de cada usuário, garantindo que suas metas nutricionais sejam atendidas de maneira eficiente.

Estamos satisfeitos com os resultados alcançados e acreditamos que essas funcionalidades finais proporcionam uma experiência completa e personalizada para os usuários. Agradecemos a todos que contribuíram para este projeto!

<br>

### • Sprint Backlog

<br>

| ID REFERENCIA |Pioridade (Scrum Poker Planning) | REQUISITO DA SPRINT| Responsável |TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|--------------------|---------------|-----------------|-----------------|------------------|
| RF - 4     |     34      | Usuário deve ser capaz de acessar uma opção de dieta de acordo com as suas necessidades.                  |     Pollyana, Felipe e Leandro           |   ✔    | ✔    |
| RF - 5     |     21      | Acessar uma base de dados com as informações dos alimentos e seus macronutrientes.                        |   Pollyana, Felipe e Pamela              |   ✔    | ✔    |
| RF - 6     |     21     | Registrar e contabilizar os alimentos consumidos ao longo do dia de acordo com a base de dados.           |    Pollyana, Felipe e Pamela             |   ✔    | ✔    |
| RF - 7     |     21     | Acessar um cálculo diário de calorias, sendo com o saldo superior ou inferior à meta, acompanhando o progresso. |     Pollyana, Felipe e Pamela      |   ✔    |  ✔  |
| RF - 8     |     8      | Implementação e exibição das dicas para os usuários dentro da plataforma.                                 |    Pamela, Maria Eduarda e Leandro       |   ✔    | ✔   |
| RF - 10    |     21      | Visualizar um histórico de ingestão calórica.                                                             |    Pollyana, Felipe, Maria Eduarda, Raquel e Leandro          |   ✔    | ✔   |
| RNF - 3    |     21     | Ter uma interface dinâmica, responsiva e usual para uma melhor experiência do usuário em diferentes tamanhos de telas. |    Pollyana, Maria Eduarda, Raquel e Leandro     |   ✔    |   ✔    |

<br>

### • Burndown Sprint 3

<br>

![Burndown 3](https://github.com/user-attachments/assets/55f2ba77-6777-41ca-bb59-d4db32097b52)





### • Sprint Retrospective

1. Indentificação dos principais desafios enfrentados durante a sprint?

Nosso maior desafio foi conseguir executar os comandos no React e no Typescript, sendo que não tínhamos uma base dessas linguagens de programação ainda que foram adquiridas posteriormente as entregas das sprints. 

2. Lições aprendidas e melhoria propostas para futuros projetos?

Uma lição importante foi a necessidade de garantir um aprendizado mais sólido das linguagens de programação antes de iniciar o projeto, o que permitiria um desenvolvimento mais eficiente. A cobrança para entregar resultados antes de ter uma base nas tecnologias, em React e Typescript, causou dificuldades no desenvolvimento. Para futuros projetos, sugerimos que o aprendizado das ferramentas e linguagens seja realizado de forma antecipada, permitindo que os membros da equipe adquiram o conhecimento necessário e possam aplicar o que aprenderam de forma eficiente no semestre seguinte, com maior domínio.
