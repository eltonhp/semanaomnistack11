const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Parametros
 *
 * Query  Params: usando para obter o nome no filtro e paginação, enviado na rota após o ? (Fitro e paginação)
 * Router Params: Parâmetro utilizado para buscar recurso, req.params
 * Body: usando para obter o contéudo, req.body
 *
 * SQL Builder: o drive de conexão de banco de dados será o knexjs: http://knexjs.org/
 */



app.listen(3333)
