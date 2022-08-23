module.exports = (sequelize, dataTypes) => {
    let alias = 'productCart'; 
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
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Productcart = sequelize.define(alias,cols,config);

/*     User.associate = function (models) {
        User.belongsTo(models.UserImage, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "image",
            foreignKey: "id_userImage"
        })

        User.belongsTo(models.userCategory, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "category",
            fireignKey: 'id_userCategory',           
        })
    }
 */
    return Productcart
};