const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//desacoplar o modulo de rotas do express para guardar na variável routes 

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.create);

routes.post('/sessions', SessionController.create);
module.exports = routes;
//exportar a variável routes para ser usada em outro arquivos.
