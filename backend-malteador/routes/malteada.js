'use strict'

var express = require('express');
var malteadaController = require('../controllers/malteadaController');

var router = express.Router();
//RUTA PRUEBA
router.post('/test', malteadaController.test);
//RUTAS
router.post('/guardar', malteadaController.GuardarMalteada);
router.get('/lista-malteada', malteadaController.ListarMalteadas);
router.get('/frutas', malteadaController.ListarFrutas);
router.post('/fruta-valor', malteadaController.ListarFrutasValor);
router.get('/liquidos', malteadaController.ListarLiquidos);
router.post('/liquido-valor', malteadaController.ListarLiquidosValor);
router.get('/proteinas', malteadaController.ListarProteinas);

module.exports = router;