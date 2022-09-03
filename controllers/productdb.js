const { Op }    = require("sequelize");
const db = require("../Data/models");
const models = require( '../Data/handlers/associations' );
const {	validationResult} = require('express-validator');
const sequelize = require( '../Data/handlers/sequelize' );
const dbproductcontroller = {

add: function(req,res){
   
    let promcate = db.product_category.findAll();
    let promcol = db.color.findAll();
    Promise
    .all([promcate, promcol])
    .then(([allcate, allcolor]) => {
        return res.render('productsdb/productdbCreate', {allcate, allcolor})}
    ).catch(error => console.log(error))
    
   },    

store: function(req,res){
    //console.log(req.body)
   		//Validacion de products
        
            const resultValidationp = validationResult(req);

           if (resultValidationp.errors.length > 0) {
               return res.render('productsdb/productdbCreate', {
                   errors: resultValidationp.mapped(),
                   oldData: req.body
               });
           } 

        db.Product.create({
         name        : req.body.name,
		 descripcion : req.body.descripcion,
		 category_id :  req.body.category_id,
         image       : req.file.filename,
		 color_id   : req.body.colors_id,
         price       : req.body.price,
		 discount    : req.body.discount,
         reference    : req.body.reference,
         descripcionfull    : req.body.descripcionfull,
         
         
     })        .then(()=> {
        res.redirect('productlist');
         //return res.redirect('/')
     })            
     .catch(error => console.log(error))
   
        
       
}, 
edit: function(req,res){
    let prompro = db.Product.findByPk(req.params.id, {include:[ models['color'],models['product_category']]});
    let promcate = db.product_category.findAll();
    let promcol = db.color.findAll();
    Promise
    .all([prompro,promcate, promcol])
    .then(([onepro,allcate, allcolor]) => {
        console.log(JSON.stringify(onepro, null, 2));
        return res.render('productsdb/productdbEdit', {onepro,allcate, allcolor})}
    ).catch(error => console.log(error))
    
   },    
update: function(req,res){
    let prodId = req.params.id; 
    
    db.Product.update(
      {
        name        : req.body.name,
        descripcion : req.body.descripcion,
        category_id :  req.body.category_id,
        image       : req.body.image,
        color_id   : req.body.colors_id,
        price       : req.body.price,
        discount    : req.body.discount,
        reference    : req.body.reference,
        descripcionfull    : req.body.descripcionfull,
          
       },
       
       {
           where: {id: prodId}
   }) .then(()=>{
      return res.redirect('/prodb/productlist')
   }).catch((error)=>{
       console.log(error);
  
   })        
},  
erase: function(req,res){
    let prodId = req.params.id;
    console.log(prodId);
    db.Product
    .destroy({where: {id: prodId}, force: true}) // force: true es para asegurar que se ejecute la acción
    .then(()=>{
        return res.redirect('/prodb/productlist')})
    .catch(error => res.send(error)) 
},  
list: function( req, res, next ) {
      
        sequelize.findAll( 'Product', {
            
            attributes: [ "id","name","image","descripcion","reference"],
           

        }).then( function( product ){
            console.log( product );
            res.render( 'productsdb/productlist', {product} );
            

        }).catch(function( error ){
            console.log( error );
        }); 
         
    },
    detail: function( req, res ) {
        db.Product.findByPk(req.params.id, {include:[ models['color'],models['product_category']]}
        
      )
       .then(Product => {
      //  console.log(JSON.stringify(Product, null, 2));
      
        res.render( 'productsdb/productdetail', {Product} );
       });
                   
   },
    buscar: (req, res) => {
        
        let nombre = req.body.name;
        //console.log(nombre);
        
        var condition = nombre ? {  [db.Sequelize.Op.like]: `%${nombre}%`  } : null;
        console.log(condition);
        db.Product.findAll({
           where: {name:condition}
          })
          
          .then(product => {
              if (product.length > 0) {
                          console.log(product);
              //console.log(product[0].name);
              res.render('productsdb/productlist', {product})    
              }
              else {
                 // colocar no coinciden refrescar la pagina o un mensaje 0 coincidencias y boton de recarga o algo asi
      }
          });
      }

}

module.exports = dbproductcontroller;