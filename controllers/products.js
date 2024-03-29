const fs = require('fs');
const path = require('path');

const sequelize = require( '../Data/handlers/sequelize' );

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//console.log(products);
const {	validationResult} = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {

    product: function(req,res){
        sequelize.findAll( 'Product', {
         attributes: [ "id","name","price","image","discount","category_id"],
         }).then( function( productdb ){
           res.render( 'products/product', {productdb,products, toThousand} );
         }).catch(function( error ){
            console.log( error );
        }); 
        
     /*    res.render('products/product', { products, toThousand });
       // console.log(products) */
    },
    create: function(req,res){
      				res.render('products/productCreate');
                     
	},
    store: function(req,res){
		//Validacion de products
        
        const resultValidationp = validationResult(req);

		if (resultValidationp.errors.length > 0) {
			return res.render('products/productCreate', {
				errors: resultValidationp.mapped(),
				oldData: req.body
			});
		}

        let products = JSON.parse( fs.readFileSync( productsFilePath, 'utf-8' ) );
		const id     = products.length + 1;

		let name        = req.body.name;
		let descripcion = req.body.descripcion;
		let category    = req.body.category;
        let image       = req.file.filename;
		let color       = req.body.colors;
        let price       = req.body.price;
		let discount    = req.body.discount;
        let reference    = req.body.reference;
        let descripcionfull    = req.body.descripcionfull;

        let newProduct = {

			id: id,
            name: name,
            descripcion:descripcion,
			category: category,
            image:image,
            color:color,
			price: price,
            discount:discount,
            reference:reference,
            descripcionfull:descripcionfull,
					
		         		};

		products.push( newProduct );

		fs.writeFileSync( productsFilePath , JSON.stringify( products ), { encoding: 'utf-8' } );

		res.redirect( '/products' );   
       
},
    
    detail: (req, res) => {
        const id = +req.params.id;
        let productDetail = products.filter( function( product ){

			return product.id === id;

		});
        console.log(productDetail);
        productDetail = productDetail[ 0 ];
        res.render( 'products/detail', { title: productDetail.name, productDetail, toThousand } );
    
    },
// Update - Form to edit
edit: (req, res) => {
		
    const id = +req.params.id;

    let productDetail = products.filter( function( product ){

        return product.id === id;

    });

    productDetail = productDetail[ 0 ];

    res.render( 'products/productEdit', { title: productDetail.name, productToEdit: productDetail } );

},
// Update - Method to update
update: (req, res) => {

    let products = JSON.parse( fs.readFileSync( productsFilePath, 'utf-8' ) );
    const id     = +req.params.id;

        let name        = req.body.name;
		let descripcion = req.body.descripcion;
		let category    = req.body.category;
        let image       = req.body.image;
		let color       = req.body.colors;
        let price       = req.body.price;
		let discount    = req.body.discount;
        let reference    = req.body.reference;
        let descripcionfull    = req.body.descripcionfull;

    let editProduct = {

            id: id,
            name: name,
            descripcion:descripcion,
			category: category,
            image:image,
            color:color,
			price: price,
            discount:discount,
            reference:reference,
            descripcionfull:descripcionfull,

    };	

    for( let i in products ) {

        if( products[ i ].id === id ) {

            products[ i ] = editProduct;
            break;

        }

    }

    fs.writeFileSync( productsFilePath , JSON.stringify( products ), { encoding: 'utf-8' } );
    res.redirect( '/products' );

},
	// Delete - Delete one product from DB
	destroy : (req, res) => {

		let products = JSON.parse( fs.readFileSync( productsFilePath, 'utf-8' ) );
		const id     = +req.params.id;

		let productDestroyed = products.filter( function( product ){

			return product.id !== id;

		});

		console.log( productDestroyed );

		fs.writeFileSync( productsFilePath , JSON.stringify( productDestroyed ), { encoding: 'utf-8' } );
		res.redirect( '/products' );

	},

    productcart: function(req,res){
        res.render('products/productCart', { products, toThousand }
        )
    },
 /*    productdetail: function(req,res){
        res.render('products/productDetail');
    },

    productcreate:  function(req,res){
        res.render('products/productCreate');
    },

    productedit:  function(req,res){
        res.render('products/productEdit');
    } */
    
    lentes: function (req, res ) {
        
        const lentes = products.filter( function( product ) {

			return product.category === 'Lentes';

		});
        res.render('products/lentes', { lentes, toThousand } );
     },
    
     deportivos: function (req, res ) {
        const deportivos = products.filter( function( product ) {
        return product.category === 'Deportivas';
        });
        res.render('products/deportivos', { deportivos, toThousand }  );
     },
     

     gafasSol: function (req, res ) {
        const gafasSol = products.filter( function( product ) {
        return product.category === 'Gafas de Sol';
        });
        res.render('products/gafasSol' , {gafasSol, toThousand } );
     },
     lenteschicos: function (req, res ) {
        const lenteschicos = products.filter( function( product ) {
        return product.category === 'lentes Niños';
        });
        res.render('products/lenteschicos', { lenteschicos, toThousand }  );
     }
  }

   module.exports = controller;


/* 1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/ :id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/ :id /edit (GET)
Formulario de edición de productos
6. /products/ :id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/ :id (DELETE)
Acción de borrado /*/