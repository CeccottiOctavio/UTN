var express = require('express');
var router = express.Router();
var adminModel = require ('./../models/adminModel');


router.get('/Clientes', async function(req, res, next) {

    var clientes = await adminModel.getClientes();
  
    console.log("este es clientes", clientes)
    res.json(clientes)
  });

module.exports = router;