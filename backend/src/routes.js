const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



//Ong Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incidents Routes
routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index );
routes.delete('/incidents/:id',IncidentController.delete);

//Session Routes
routes.post('/sessions',SessionController.create);

//Profile Routes
routes.get('/profile',ProfileController.index );
//routes.delete('/profile/:id',ProfileController.delete);

module.exports = routes;