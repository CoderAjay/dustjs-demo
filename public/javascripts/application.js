(function($, ddust, app) {
    'use strict';
    $(document).ready(function() {
        console.log('jQuery is ready.');
        var dataservice = app.DataService.create();

        function actionsLinks() {
            console.log($('a.product'));
            $('a.product').click(function() {
                var id = $(this).attr('data-productId');
                dataservice.getProduct({
                    id: id
                }).then(function(product) {
                    dust.render('product.dust', {
                        product: product
                    }, function(err, out) {
                        $('.product-tmpl').html(out);
                        $(window).scrollTop(10);
                        dataservice.getRelatedProduct({
                            id: id
                        }).then(function(relatedProducts) {
                            dust.render('taxonomy.dust', {
                                products: relatedProducts.products
                            }, function(err2, out2) {
                                $('.related-product-tmpl').html(out2).promise().done(function() {
                                    actionsLinks();
                                });
                            });
                        });
                    });
                });
                return false;
            });
        }

        actionsLinks();

        // dust.render('error.dust', {
        //     error: 'ajay',
        //     message: 'singh'
        // }, function(err, out) {
        //     console.log(out);
        // });
        function changeUrl() {

        }
    });
}(window.jQuery, window.dust, window.APP || (window.APP = {})));
