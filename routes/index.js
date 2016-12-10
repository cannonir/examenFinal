var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen Final', subtitle: 'Avances en Computacion' });
});
router.get('/', function(req, res, next) {
  res.render('Correcto');
});

module.exports = router;
