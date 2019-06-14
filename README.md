# Semana OminiStack

Repositório referente a utilização da stack MERN (MongoDB, Express, React, Node) feita durante a semana OminiStack promovida pela Rocketseat, o projeto envolve a criação de uma aplicação réplica ao Instagram, onde foram utilizados todos os elementos da stack, inclusive ainda ReactNative para criação da versão mobile da aplicação, visto que o consumo da API REST feita com Express.js em ambiente Node.js, é compartilhada entre a aplicação web e mobile.

# Ambiente de Desenvolvimento

Os recursos utilizados no ambiente de desenvolvimento envolvem o Node.js (servidor) e o gerenciador de pacotes Yarn, alternativa ao npm que oferece algumas vantagens, como armazenamento em cache de registros dos pacotes instalados, permitindo por exemplo que a instalação dos pacotes em máquinas terceiras aconteçam na mesma ordem que o projeto original.

[Alguns insights meus sobre o Node.js](https://jsdaniell.gitbook.io/source-code/nodejs)

## Instalação Node.js via nvm

A instalação do Node.js foi feita via nvm (Node Version Manager) para fins de controle de versão posteriormente. A instalação do script nvm pode ser feita por linha de comando a partir do terminal. Após a execução do script, é preciso instalar a versão desejada do Node.js para desenvolvimento, ao executar `nvm install node` será instalada a última versão estável.

**Mais informações:**

[nvm (Repositório no GitHub)](https://github.com/nvm-sh/nvm)

## Instalação Yarn (Gerenciador de Pacotes)

A instalação do gerenciador de pacotes Yarn também é feita por linha de comando, no seu método de instalação padrão o Yarn instala o Node.js por padrão, por isso é preciso certa atenção para instalar o Yarn sem instalar novamente o Node.js.

**Informações sobre a instalação:**

[Instalação Yarn](https://yarnpkg.com/en/docs/install)

# Ferramentas Utilizadas na Aplicação

## Express.js

Para criação e execução do servidor foi utilizado o framework Express.js, no qual abstrai grande parte da complexidade do que seria necessário utilizando apenas Node.js dando mais produtividade ao desenvolvimento e deixando que o foco fique direcionado mais a lógica de negócio da aplicação.

[Alguns insights meus sobre o Express.js](https://jsdaniell.gitbook.io/source-code/nodejs/expressjs)

## Mongoose

Mongoose foi o módulo utilizado para modelagem e manipulação do banco de dados não relacional e seus respectivos dados. Abaixo segue um exemplo de Schema criado para utilização na aplicação:

 Abaixo tem um dos exemplos de Schema implementados para uso no servidor.

```javascript
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
})
```

## Insomnia

Para testar e observas as requisições e respostas que transitam na aplicação, visto que por padrão, não é possível receber requisições POST no navegador.

[Site oficial do Insominia](https://insomnia.rest)

Nas requisições feitas pelo Insomnia, o tipo de estrutura de dados utilizadas no envio da requisição foi o "Multipart Data" no qual funciona como um formulário, porém também aceita arquivos.

## Multer

Para lidar com as requisições recebidas pelo Insominia foi utilizado um módulo chamado Multer, basicamente permite a manipulação dos dados recebidos através das requisições, o multer ainda automatiza o processo de upload dos arquivos e dados da aplicação.

### Funcionamento

```javascript
const express = require('express');
const PostController = require('./controllers/PostController');
const uploadConfig = require('./config/upload')
const multer = require('multer');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;
```

No código acima, a rota `/posts` é a responsável pela captura da requisição, ao capturar a requisição composta por uma imagem e alguns dados configurados no envio da requisição com insomnia, utiliza o método `single()` pertencente ao `multer()` que especifica o nome do dado a ser feito o upload, segue a configuração de upload passada como paramêtro na função `multer`, essa configuração se encontra no arquivo `upload.js`.

```javascript
const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
}
```

Basicamente um objeto composto por configurações de manipulação está sendo o paramêtro de `multer()` e então seus métodos agem de acordo com as configurações setadas no desenvolvimento.

> O terceito paramêtro invoca o método `PostController.store` que se encontra no arquivo `PostController.js` na qual será efetuado o tratamento dos dados do corpo da requisição.

