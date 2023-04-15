const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);

//Ongs
routes.get('/getOngs', OngController.index);
routes.post('/createOng', OngController.create);

routes.get('/profile', ProfileController.index);

//Incidents
routes.get('/getIncidents', IncidentController.index);
routes.post('/createIncidents', IncidentController.create);
routes.delete('/deleteIncidents/:id', IncidentController.delete);

module.exports = routes;
