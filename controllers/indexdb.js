    const { Op }    = require("sequelize");
    const db = require("../Data/models");
    const sequelize = db.sequelize;
 //  Connection? 
    sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

   //   console.log(db);
  // console.log(db.User.findAll());
 //console.log(sequelize);
  
 const controller = {

        'ecomerce': function( req, res ) {
          
          
             db.User.findAll()
            .then(genres => {
                console.log(genres);
                res.render( 'ecomerce', {genres} );
            });
            
            //console.log(sequelize);
            
            
        }
    }
    
    module.exports = controller;