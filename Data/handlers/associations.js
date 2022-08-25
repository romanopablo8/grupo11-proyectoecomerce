
const db = require('../models/index.js');
//console.log(db );
 //db.product.hasOne(db.color, { foreignKey: 'color_id' });

    models[ 'product' ].hasOne( models[ 'color' ], {
        foreignKey: 'color_id',
  
    });
    models[ 'color' ].belongsTo( models[ 'product' ],{
        foreignKey: 'color_id'
    });

    models[ 'product' ].hasOne(models[ 'product_category' ], {
        foreignKey: 'category_id',
  
    });
    models[ 'product_category' ].belongsTo( models[ 'product' ],{
        foreignKey: 'category_id'
    });

    models[ 'User' ].hasOne( models[ 'user_category' ], {
        foreignKey: 'category_id',
  
    });
    models[ 'user_category' ].belongsTo( models[ 'User' ],{
        foreignKey: 'category_id'
    });
 
    // ejemplo de profe
   /*  models[ 'cursos' ].hasMany( models[ 'alumnos_comisiones' ], {
        foreignKey: 'id_curso',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    models[ 'alumnos_comisiones' ].belongsTo( models[ 'cursos' ], {
        foreignKey: 'id_curso'
    }); */

    module.exports = models;

