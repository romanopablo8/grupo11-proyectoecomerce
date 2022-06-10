const controller = {
    
    productcart: function(req,res){
        res.render('products/productCart');
    },
    
    productdetail: function(req,res){
        res.render('products/productDetail');
    }
}

module.exports = controller;