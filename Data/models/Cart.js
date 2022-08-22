module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.STRING(100),
            allowNull: false
        },        
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Cart = sequelize.define(alias,cols,config);

   

    return Cart
};