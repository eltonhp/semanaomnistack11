Comandos

`init -y`: Inicia o nodes

## Instalação de dependencias
`npm install express`: Biblioteca para utilizar o servidor <br/>
`npm install nodemon`: Para reinicar o servidor no modo de desenvolvimento sempre
 que ocorrer uma alteração no código<br/>
`npm install knex`: SQL Builder utilizado para varios modelos de banco de dados
  como por exemplo: mysql, oracle, sqllite e entre outros<br/>


## Usando o knex, framework de banco de dados
`npx knex init`: Comando para iniciar o script de configuração das DDL <br/>
`npx knex migrate make:<nome da tabela>`: cria o arquivo de configuração de uma tabela <br/>
`npx knex migrate:latest`: Cria as tabelas <br/>

`npm start`: inicia o servidor
