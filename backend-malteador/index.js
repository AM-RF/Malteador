'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/smoothies',{ usuNewUrlParser: true})
.then(() =>{
    console.log('se ha conectado a la base de datos smoothies!');

    //Crear servidor y escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:' + port);
    });

    
});