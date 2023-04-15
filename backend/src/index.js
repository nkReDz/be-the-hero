const express = require('express');
const cors = require('cors')
const test_routes = require('./test-routes');
const routes = require('./routes');

const app = express();

app.use(cors());

// Porta da sua aplicação
app.listen(3333);

// Obter o JSON que tu envia via POST
app.use(express.json());
app.use(test_routes);
app.use(routes);
