const sequelize = require ( '../Data/handlers/sequelize' );


const controller = {

    home: function( req, res ) {
        sequelize.findAll( 'Product', {
            attributes: [ "id","name","price","image","discount","category_id"],
            }).then( function( productdb ){
              res.render( 'index' , {productdb} );
            }).catch(function( error ){
               console.log( error );
           }); 

       // res.render( 'index' );
    },

   nosotros: function ( req, res ) {
     res.render ("nosotros")
   },

   colecciones: function ( req, res ) {
    res.render ("colecciones")
  },
  
  contactenos: function ( req, res ) {
    res.render ("contactenos")
  }
}

module.exports = controller;