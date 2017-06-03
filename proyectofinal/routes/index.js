var express = require('express');
var router = express.Router();
var reclamo = {tipoReclamo:'odeco', observacion:'mal servicio', fecha:'01/01/2017'};
var objeto = {title:'algun titulo', visitante:'algun visitante', semestre:'algun semestre', reclamo:reclamo};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: objeto.title, visitante: objeto.visitante, semestre : objeto.semestre, reclamo:objeto.reclamo});
});

router.get('/registroReclamo', function(req, res) {
  res.render('registroReclamo', {reclamo: reclamo });
});

module.exports = router;
