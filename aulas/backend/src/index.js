const express = require('express');
const cors = require('cors');
const routes = require('./routes');
/*importar a variável routes exportada do arquivo routes.js
/não é necessário usar o mesmo nome routes para a constante.
passa-se o nome com ./ (mesma pasta) para que o arquivo não seja confundido com um pacote*/

const app = express(); //instanciar constante express

app.use(cors());
app.use(express.json()); //converter o corpo em json.
//Rota raíz - recurso é acessado pela rota. Ex.: site/alunos. recurso alunos
app.use(routes);
/*
Metodos http:
get: buscar recursos no backend
post: criar uma informação
put: alterar uma informação
delete: apagar uma informação
*/

/*
tipos de parâmetros:
query params: parâmetros nomeados enviados na rota após '?'. (filtros, paginação...). request.query
route params: utilizados para identificar recursos (dados de um único utilizador por exemplo). request. params
//route params não são nomeados. ex.: www.site.com/users/1 - não users/id=1
request body: corpo da requisição - usado para criar ou alterar recursos. request.body
*/

app.listen(3333);