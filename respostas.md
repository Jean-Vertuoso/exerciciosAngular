Lista 001 - Exercício 1

1. A instalação é feita pelo Node utilizando-se do gerenciador de pacotes npm, então para instalação do Angular, é necessário primeiro a instalação destes.
2. Abrir o CMD do Windows;
3. Digitar o comando "npm install -g @angular/cli";
4. Para testar se a ferramenta foi instalada, basta dar o comando "ng version";

Lista 001 - Exercício 5

1. Há diferenças? 
R: Sim.

2. Se sim, quais? 
R: No repositório remoto não há a pasta oculta ".git" e nem a pasta "node_modules".

3. Por que essas diferenças ocorrem? 
R: No caso do .git, pois seria a pasta oculta de instalação do próprio git, então naturalmente não é subida para o GitHub. No caso da pasta node_modules, é a pasta de instalação de módulos do node no computador para execução do projeto, então também não é subido. 

Lista 001 - Exercícío 6

1. Qual comando do Node instala as dependências? 
R: Para instalar as dependências basta dar o comando "npm install" no CMD dentro da pasta do projeto.

2. Como o Node sabe quais dependências precisam ser instaladas? 
R: Fazendo a leitura do arquivo .json do node, que contém todas as informações de módulos necessárias para o projeto.