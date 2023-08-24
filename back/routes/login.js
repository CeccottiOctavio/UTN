var express = require('express');
var router = express.Router();
var usuariosModel = require('./../models/usuariosModel');

router.get('/', function(req, res, next) {
  res.render('login') 
});



router.get('/logout', function (req, res, next){
  req.session.destroy();
  res.render('login')
});




router.post('/',  async (req, res, next) =>{
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario= data.id;
      req.session.nombre=usuario;
      res.redirect('/admin');
    }else{
      res.render('login',{
        error: true
      })
      
    }
  } catch (error) {
    console.log(error);
  }
});




module.exports = router;
