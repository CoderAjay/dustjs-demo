var express = require('express');
var router = express.Router();
var apiss = require('../apis/apishopstyle');
var dummyData = require('../dummy');
//var dust = require('dust-linkedin');

/* GET home page. */
router.get('/', function(req, res) {
    // apiss.shopstyleProductSearch({
    //     url: '/browse/belts',
    //     crawl: 'no',
    //     fts: 'belt',
    //     count: 40,
    //     ssAjax: 1
    // }).then(function(response) {
    //     res.json(response);
    // }, function(err) {
    //     res.json(err);
    // });

    var product = dummyData.find();
    var taxonomy = dummyData.taxonomy();
    res.render('index', {
        title: 'Express',
        name: ' Ajay Singh',
        product: product,
        taxonomy: taxonomy
    });
});

router.get('/products', function(req, res) {
    res.send('in progress');
});


router.get('/products/:id', function(req, res) {
    var product, taxonomy;
    apiss.shopstyleProductFetch({
        id: req.params.id
    }).then(function(prod) {
        product = prod;
        return apiss.shopstyleRelatedProductFetch({
            id: req.params.id
        });
    }).then(function(tax) {
        taxonomy = tax.products;
        res.render('index', {
            product: product,
            taxonomy: taxonomy
        });
    }, function(err) {
        res.render('error', {
            error: err
        });
    });
});
module.exports = router;
