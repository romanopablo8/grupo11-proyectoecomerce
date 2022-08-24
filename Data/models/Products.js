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
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);
    

<<<<<<< HEAD
    

=======
   /*  Product.associate = function (models) {
        Product.belongsTo(models.UserImage, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "images",// El nombre del modelo pero en plural
            foreignKey: "id_userImage"
        })

        Product.belongsTo(models.userCategory, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "categorys",
            fireignKey: 'id_userCategory',           
        })
    }
 */
>>>>>>> 5fe68d0fd36b147860de2a0830d3db6620c7fe96
    return Product
};