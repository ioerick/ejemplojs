var express = require('express');
var router = express.Router();
var objeto = {title:'algun titulo', visitante:'algun visitante', semestre:'algun semestre'};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: objeto.title, visitante: objeto.visitante, semestre : objeto.semestre});
});

module.exports = router;
