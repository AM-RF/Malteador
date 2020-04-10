'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FrutasSchema = Schema({});

module.exports = mongoose.model('Fruta', FrutasSchema);
