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
    
    productCart: function(req,res){
        res.render('productCart');
    },
    
    productDetail: function(req,res){
        res.render('productDetail');
    }
}

module.exports = controller;