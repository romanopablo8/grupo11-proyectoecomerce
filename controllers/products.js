const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {

    product: function(req,res){
        res.render('products/product', { products, toThousand }
        );
    },
    create: function(req,res){
      				res.render('products/productCreate');
                     
	},
    store: function(req,res){
        let products = JSON.parse( fs.readFileSync( productsFilePath, 'utf-8' ) );
		const id     = products.length + 1;

		let name        = req.body.name;
		let descripcion = req.body.descripcion;
		let image       = req.body.image;
		let category    = req.body.category;
		let color       = req.body.colors;
        let price       = req.body.price;
		
        let newProduct = {

			id: id,
            name: name,
            descripcion:descripcion,
			image:image,
            category: category,
            color:color,
			price: price,
					
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
    let price       = req.body.price;
    let discount    = req.body.discount;
    let category    = req.body.category;
    let description = req.body.description;

    let editProduct = {

        id: id,
        name: name,
        price: price,
        discount: discount,
        category: category,
        description: description

    };	

    for( let i in products ) {

        if( products[ i ].id === id ) {

            products[ i ] = editProduct;
            break;

        }

    }

    fs.writeFileSync( productsFilePath , JSON.stringify( products ), { encoding: 'utf-8' } );
    res.redirect( '/' );

},

    productcart: function(req,res){
        res.render('products/productCart', { products, toThousand }
        );
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