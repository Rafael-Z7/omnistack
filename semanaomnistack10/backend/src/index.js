const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes');

// Metodos HTTP get, post, put , delete
//get = buscando uma informacao/lista usuarios
//post = criar uma informação / cadastrar um usuario
//put = editar um usuario
//delete = deletar

//tipos de parâmetros:
//query Params: request.query(filtros, ordenação, paginação, ...)
//route Params:  request.params(Identificar um recurso na alteração ou remoção);
//body: request.body(dados para criação ou alteração de um registro)

//MongoDB(nao-relacional)

mongoose.connect('mongodb+srv://rafael:database@cluster0-o4hk7.mongodb.net/week10?retryWrites=true&w=majority',
 {useNewUrlParser: true,
 useUnifiedTopology: true 
}
 );



app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);