
const models = require('../models/index.js');
//console.log(db );
 //db.product.hasOne(db.color, { foreignKey: 'color_id' });

 models[ 'user_category' ].hasOne( models[ 'User' ], {
    foreignKey: 'category_id',
    });
    models[ 'User' ].belongsTo( models[ 'user_category' ],{
    foreignKey: 'category_id',
    });  

    models[ 'product_category' ].hasOne(models[ 'Product' ], {
        foreignKey: 'category_id',
  
    });
    models[ 'Product' ].belongsTo( models[ 'product_category' ],{
        foreignKey: 'category_id'
    });

    models[ 'color' ].hasOne( models[ 'Product' ], {
        foreignKey: 'color_id',
  
    });
    models[ 'Product' ].belongsTo( models[ 'color' ],{
        foreignKey: 'color_id'
    });
   

    module.exports = models;

