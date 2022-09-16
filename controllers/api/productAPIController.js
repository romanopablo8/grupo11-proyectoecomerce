const { Op }    = require("sequelize");
const db = require("../../Data/models");
const models = require( '../../Data/handlers/associations' );

const productAPIController = {
 
    'list': (req, res) => {
       /*  const uno = db.Product.findAll({ where: {category_id:{ [db.Sequelize.Op.like]: "1"}}});
        const dos = db.Product.findAll({ where: {category_id:{ [db.Sequelize.Op.like]: "2"}}});
        const tres = db.Product.findAll({ where: {category_id:{ [db.Sequelize.Op.like]: "3"}}});
        const cuatro = db.Product.findAll({ where: {category_id:{ [db.Sequelize.Op.like]: "4"}}}); */
        db.Product.findAll({include:[ models['color'],models['product_category']]})

      

        .then(Products => {
            let list =[];
           
            Products.forEach(Product => {
                
                let prod ={};
               
                prod['id'] = Product.id
                prod['name'] = Product.name
                prod['descripcion'] = Product.descripcion
             // prod['price'] = Product.price
             // prod['discount'] = Product.discount
             // prod['reference'] =  Product.reference
            //  prod['descripcionfull'] =  Product.descripcionfull
                                        
                prod['catecolor'] =[Product.product_category,Product.color]
               
                prod['detail'] = `api/products/${Product.id}`
                list.push(prod)
                
                
     
            });
            let respuesta = {
                meta: {
                    status : 200,
                    total: Products.length,
                    url: 'api/products/',
                    }, 
                 data:{
                     count:Products.length,
                     countByCategory:{
                        chicos:1,
                        GafasdeSol:2,
                        lentes:3,
                        Deportivas:4,
                    }
                     ,
                     products:list,
                     
                    },
                               
                     products: {Products
                    
                    }
           }
                res.json(respuesta);
    
});   
    },
    'detail': function( req, res ) {
        
            db.Product.findByPk(req.params.id, {include:[ models['color'],models['product_category']]}
            
          )
           .then(Product => {
            let respuesta = {
                meta: {
                    status : 200,
                    url: `api/products/${Product.id}`
                },
                data:{
                    id: Product.id,
                    name: Product.name,
                    descripcion:Product.descripcion,
                    category: Product.product_category,
                    image:Product.image,
                    color:Product.color,
                    price: Product.price,
                    discount:Product.discount,
                    reference:Product.reference,
                    descripcionfull:Product.descripcionfull,

                } ,
                Product:Product
            }
                res.json(respuesta);
           }); 
                   
   },

    
/*     
api/products/
○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de productos en la base.
■ countByCategory → objeto literal con una propiedad por categoría
con el total de productos.
■ products → array con la colección de productos, cada uno con:
● id
● name
● description
● un array con principal relación de uno a muchos (ej:
categories).
● detail → URL para obtener el detalle.

● api/products/:id
○ Deberá devolver un objeto literal con la siguiente estructura:
■ una propiedad por cada campo en base.
■ un array por cada relación de uno a muchos (categories, colors,
sizes, etc).
■ Una URL para la imagen del producto (para mostrar la imagen).
*/
}
module.exports = productAPIController;