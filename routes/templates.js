var express = require('express');
var router = express.Router();
var dust = require('dustjs-linkedin');
//var temp1 = require('../dist/template1')(dust);
/* GET . */
router.get('/', function(req, res) {
  //  dust.loadSource(temp1);
    dust.render('template1.html', {
        name: 'Ajay Singh',
        title: 'CoderAjay'
    }, function(err, out) {
        res.write(out);
        res.end(compiled);
    });
});

module.exports = router;
