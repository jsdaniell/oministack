# Execução da Semana OminiStack

Repositório referente a utilização da stack MERN (MongoDB, Express, React, Node) feita durante a semana OminiStack promovida pela Rocketseat, o projeto envolve a criação de uma aplicação réplica ao Instagram, onde foram utilizados todos os elementos da stack, inclusive ainda ReactNative para criação da versão mobile da aplicação, visto que o consumo da API REST feita com Express.js em ambiente Node.js, é compartilhada entre a aplicação web e mobile.

## Ambiente de Desenvolvimento

Os recursos utilizados no ambiente de desenvolvimento envolvem o Node.js (servidor) e o gerenciador de pacotes Yarn, alternativa ao npm que oferece algumas vantagens, como armazenamento em cache de registros dos pacotes instalados, permitindo por exemplo que a instalação dos pacotes em máquinas terceiras aconteçam na mesma ordem que o projeto original.

[Mais informações sobre o Node.js](https://jsdaniell.gitbook.io/source-code/nodejs)

### Instalação Node.js via nvm

A instalação do Node.js foi feita via nvm (Node Version Manager) para fins de controle de versão posteriormente. A instalação do script nvm pode ser feita por linha de comando a partir do terminal. Após a execução do script, é preciso instalar a versão desejada do Node.js para desenvolvimento, ao executar `nvm install node` será instalada a última versão estável.

**Mais informações:**

[nvm (Repositório no GitHub)](https://github.com/nvm-sh/nvm)

### Instalação Yarn (Gerenciador de Pacotes)

A instalação do gerenciador de pacotes Yarn também é feita por linha de comando, no seu método de instalação padrão o Yarn instala o Node.js por padrão, por isso é preciso certa atenção para instalar o Yarn sem instalar novamente o Node.js.

**Informações sobre a instalação:**

[Instalação Yarn](https://yarnpkg.com/en/docs/install)

## Base da Aplicação

### Express.js

Para criação e execução do servidor foi utilizado o framework Express.js, no qual abstrai grande parte da complexidade do que seria necessário utilizando apenas Node.js dando mais produtividade ao desenvolvimento e deixando que o foco fique direcionado mais a lógica de negócio da aplicação.

[Mais informações sobre o Express.js](https://jsdaniell.gitbook.io/source-code/nodejs/expressjs)
