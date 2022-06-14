const controller = {
    
    productcart: function(req,res){
        res.render('products/productCart');
    },
    
    productdetail: function(req,res){
        res.render('products/productDetail');
    },
    productcreate:  function(req,res){
        res.render('products/productCreate');
    },
    productedit:  function(req,res){
        res.render('products/productEdit');
    }
}

module.exports = controller;