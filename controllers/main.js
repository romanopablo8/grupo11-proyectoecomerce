const controller = {

    home: function( req, res ) {
        res.render( 'index' );
    },
    login: function( req, res ) {
        res.render('login')
    },
    register: function(req,res){
        res.render('register');
    },
    
    productcart: function(req,res){
        res.render('productCart');
    },
    
    productdetail: function(req,res){
        res.render('productDetail');
    }
}

module.exports = controller;