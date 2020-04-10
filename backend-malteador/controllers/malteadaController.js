'use strict'

var validator = require('validator');
var Malteada = require('../models/malteada');
var Fruta = require('../models/frutas');
var Liquido = require('../models/liquidos');
var Proteina = require('../models/proteinas');

var controller = {

    test: (req, res) =>{
        return res.status(200).send({
            message: 'ruta desde el controlador'
        });
    },

    GuardarMalteada: (req, res) =>{
        // Recoger parametros por post
        var params = req.body;
        // Validar datos
        try{
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_fruta = !validator.isEmpty(params.fruta);
            var validate_liquido = !validator.isEmpty(params.liquido);
            var validate_proteina = !validator.isEmpty(params.proteina);
            var validate_sabor = !validator.isEmpty(params.sabor);
            //var validate_salud = !validator.isEmpty(params.salud);

        }catch(err){
            return res.status(200).send({
                status: 'Error',
                params ,
                message: 'Error de datos al controller'
            });
        }

        if(validate_nombre && validate_fruta && validate_liquido && validate_proteina && validate_sabor){
            var malteada = new Malteada();
            //Asignar valores
            malteada.nombre = params.nombre;
            malteada.fruta = params.fruta;
            malteada.liquido = params.liquido;
            malteada.proteina = params.proteina;
            malteada.sabor = params.sabor;
            malteada.salud = params.salud;
            //Guardar malteada

            malteada.save((err, malteadaStored) =>{
                
                if(err || !malteadaStored){
                    return res.status(404).send({
                        status: 'Error',
                        message: 'No se ha guardado los datos'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    malteada: malteadaStored
                });


            });

            //devolver respuesta

            return res.status(200).send({
                status: 'success',
                malteada
            });

        }else{
            return res.status(200).send({
                status: 'Error',
                message: 'datos no validos al guardar'
            });
        }   
    },
    ListarMalteadas: (req, res) =>{

        Malteada.find({}).exec((err, malteada) =>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al listar'
                });
            }

            if(!malteada){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay malteadas'
                });
            }

            return res.status(200).send({
                status: 'success',
                malteada
            });

        });
    },
    ListarFrutas: (req, res) =>{

        Fruta.find({}).exec((err, fruta) =>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al listar'
                });
            }

            if(!fruta){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay fruta'
                });
            }

            return res.status(200).send({
                status: 'success',
                fruta
            });

        });
    },
    ListarFrutasValor: (req, res) =>{
        var FrutaNombre = req.body.nombre;

        Fruta.findOne({nombre: FrutaNombre}, (err, fruta) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'No existe fruta'
                });
            }

            if(!fruta){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay fruta'
                });
            }

            return res.status(200).send({
                status: 'success',
                fruta
            });
        });
    },    

    ListarLiquidos: (req, res) =>{
        Liquido.find({}).exec((err, liquido) =>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al listar'
                });
            }
    
            if(!liquido){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay liquido'
                });
            }
    
            return res.status(200).send({
                status: 'success',
                liquido
            });
    
        });
    },
    ListarLiquidosValor: (req, res) =>{
        var LiquidoNombre = req.body.nombre;

        Liquido.findOne({nombre: LiquidoNombre}, (err, liquido) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'No existe Liquido'
                });
            }

            if(!liquido){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay Liquido'
                });
            }

            return res.status(200).send({
                status: 'success',
                liquido
            });
        });
    }, 
    ListarProteinas: (req, res) =>{
        Proteina.find({}).exec((err, proteina) =>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al listar'
                });
            }
    
            if(!proteina){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay proteinas'
                });
            }
    
            return res.status(200).send({
                status: 'success',
                proteina
            });
    
        });
    }
    
};

module.exports = controller;