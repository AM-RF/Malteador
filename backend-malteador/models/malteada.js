'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MalteadaSchema = Schema({
    nombre: String,
    fruta: String,
    liquido: String,
    proteina: String,
    sabor: Number,
    salud: Number
});

module.exports = mongoose.model('Malteada', MalteadaSchema);
//Guardar documentos en la collection
