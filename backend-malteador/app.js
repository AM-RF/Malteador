'use strict'

//CARGAR MODULOS
var express = require('express');
var bodyParse = require('body-parser');


//EJERCUTAR EXPRESS
var app = express();

//CARGAR RUTAS
var malteadas_router = require('./routes/malteada');

//CARGAR MIDDLEWARES
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//ACTIVAR CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// PREFIJOS A RUTAS Y CARGAR RUTAS
app.use('/', malteadas_router);


//RUTA DE PRUEBA
/*app.get('/probando', function(req, res){
    console.log('probando ruta');
});*/

//EXPORTAR MODULO
module.exports = app;