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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Tabla = sequelize.define(alias,cols,config);

    Tabla.associate = function (models) {
        //asociar foreignKeys aca
        
    }

    return Tabla
};