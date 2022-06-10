const controller = {

    home: function( req, res ) {
        res.render( 'index' );
    },
    
    productcart: function(req,res){
        res.render('productCart');
    },
    
    productdetail: function(req,res){
        res.render('productDetail');
    }
}

module.exports = controller;