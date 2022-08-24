module.exports = (sequelize, dataTypes) => {
    let alias = 'Tabla'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        number: {
           type: dataTypes.INTEGER
        }
    };
    let config = {
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Tabla = sequelize.define(alias,cols,config);

<<<<<<< HEAD:Data/models/template.js
    
=======
 /*    Tabla.associate = function (models) {
        //asociar foreignKeys aca
        
    }
 */
>>>>>>> 5fe68d0fd36b147860de2a0830d3db6620c7fe96:Data/cualtabla/template.js
    return Tabla
};