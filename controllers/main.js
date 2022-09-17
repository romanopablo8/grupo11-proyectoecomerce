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
  
  contacto: function ( req, res ) {
    res.render ("contacto")
  },

  garantia: function ( req, res ) {
    res.render ("garantia")
  },

  face: function ( req, res ) {
    res.render ("redessociales")
  },

  ig: function ( req, res ) {
    res.render ("redessociales")
  },


  wp: function ( req, res ) {
    res.render ("redessociales")
  },
  
  youtube: function ( req, res ) {
    res.render ("redessociales")
  }


}

module.exports = controller;