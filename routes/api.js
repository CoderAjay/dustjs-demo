var express = require('express');
var api = express.Router();
var apiss = require('../apis/apishopstyle');

api.get('/product/:id', function(req, res) {
    apiss.shopstyleProductFetch({
        id: req.params.id
    }).then(function(response) {
        res.status(200).json(response);
    }, function(err) {
        res.status(404).json(err);

    });
});
api.get('/related/:id', function(req, res) {
    apiss.shopstyleRelatedProductFetch({
        id: req.params.id,
        showSizeFilter: true,
        showColorFilter: true
    }).then(function(response) {
        res.status(200).json(response);
    }, function(err) {
        res.status(404).json(err);

    });
});
module.exports = api;
