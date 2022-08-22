module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        price: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: false

        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_color: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_brand: {
           type: dataTypes.INTEGER,
           allowNull: false
        },
        id_productImage: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_productCategory: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);

    

    return Product
};