var express = require('express');
const { rawListeners } = require('../../models/bd');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/novedades', {
    layout: 'admin/layout'
    usuario: req.session.nombre,
  });
});

module.exports = router;