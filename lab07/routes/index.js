var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  datos ={
    "nombre":"Friman",
    "email": "friman.vilcapoma@gmail.com"
  };
  res.render('dash',function(err,html){
    res.render('templates/layout',{
      'usuario': datos,
      'tituloSeccion':'Dashboard',
    });
  });
});

module.exports = router;
