
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

 //   db.sequelize.sync()
 //     .then(() => {
 //       console.log("Synced db.");
 //     })
 //     .catch((err) => {
 //       console.log("Failed to sync db: " + err.message);
 //     });
 //   
    // // drop the table if it already exists
    // db.sequelize.sync({ force: true }).then(() => {
    //   console.log("Drop and re-sync db.");
    // });


 //   console.log(db);
   console.log(db.userCategory.findAll());
   
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