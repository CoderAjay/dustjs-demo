(function(app, $) {
    'use strict';
    var DataService = (function() {

        function DataService() {

        }

        DataService.prototype.getProduct = function(options) {
            return ($.ajax({
                url: '/api/product/' + options.id
            }));
        };
        DataService.prototype.getRelatedProduct = function(options) {
            return ($.ajax({
                url: '/api/related/' + options.id
            }));
        };

        return DataService;
    }());

    DataService.create = function() {
        return new DataService();
    };

    app.DataService = DataService;

}(window.APP || (window.APP = {}), window.jQuery));
