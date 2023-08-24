var express = require('express');
var router = express.Router();
var adminModel = require('../models/adminModel');


router.get('/', async function(req, res, next) {

  var clientes = await adminModel.getClientes();


  res.render('admin',{
    persona: req.session.nombre,
    clientes: clientes,
  });
});


router.get ('/agregar', (req, res, next)=>{
  res.render('agregar', {

  })
});


router.post('/agregar', async (req, res, next)=>{
  try {
    if (req.body.clientes !=="" && req.body.finalizado !=="" && req.body.importe !=="" && req.body.total !=="" ){
      await adminModel.insertClientes(req.body);
      res.redirect('/admin')
    } else {
      res.render('agregar',{
        error: true,
        message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error)
    res.render('agregar',{
      error: true,
      message: 'No se cargo el cliente'
    });
  }
});


router.get ('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await adminModel.deleteAdminById(id);
  res.redirect('/admin');
});

router.get ('/modificar/:id', async(req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var editar = await adminModel.getCliente(id);


  res.render('modificar', {
    editar
  })
});


router.post('/modificar', async(req ,res, next) =>{
  try {
    var obj = {
      clientes: req.body.clientes,
      finalizado: req.body.finalizado,
      importe: req.body.importe,
      total: req.body.total
    }
    console.log (obj)

    await adminModel.modificarAdminById(obj , req.body.id);
    res.redirect('/admin');


  }catch (error) {
    console.log(error)
    res.render('modificar', {
      error: true,
      message: 'No se modifico el cliente'
    })
  }
})


module.exports = router;