var express = require('express');
var router = express.Router();

/* GET Dashboard page. */
router.get('/', function(req, res, next) {
  datos = {
    "nombre": "Leonardo Curaca",
    "email": "leonardo.curaca@gmail.com"
  };
  res.render('dash', function(err, html) {
    res.render('templates/layout', {
      'usuario': datos,
      'tituloSeccion': 'Bienvenido',
      'seccion': html
    });
  });
});

module.exports = router;
