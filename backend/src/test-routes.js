const express = require('express');

const routes = express.Router();

// GET METHODS

routes.get('/getUser', (request, response) => {
    return response.json({
        eventName: 'Semana Omnistack 11.0',
        student: 'Renan Modzinski',
    });
});

routes.get('/getUsers/:id/:name/:age', (request, response) => {
    const params = request.params;

    return response.json({
        eventName: 'Semana Omnistack 11.0',
        id: params.id,
        name: params.name,
        age: params.age,
    });
});

// POST METHODS

routes.post('/postUser', (request, response) => {
    return response.json({
        eventName: 'Semana Omnistack 11.0',
        student: 'Renan Modzinski',
    });
});

routes.post('/createUser', (request, response) => {
    const body = request.body;

    return response.json({
        eventName: 'Semana Omnistack 11.0',
        student: body.student,
        age: body.age,
    });
});

module.exports = routes;
