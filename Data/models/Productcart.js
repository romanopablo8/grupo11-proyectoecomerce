module.exports = (sequelize, dataTypes) => {
    let alias = 'Productcart'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_cart: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_products: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Productcart = sequelize.define(alias,cols,config);

    

    return Productcart
};