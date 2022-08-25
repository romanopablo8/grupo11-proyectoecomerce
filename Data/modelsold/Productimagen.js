module.exports = (sequelize, dataTypes) => {
    let alias = 'productImagen'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productid: {
           type: dataTypes.INTEGER,
        }

    };
    let config = {
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Productimagen = sequelize.define(alias,cols,config);

    

    return Productimagen
};