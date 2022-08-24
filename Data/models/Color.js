module.exports = (sequelize, dataTypes) => {
    let alias = 'Color'; 
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
        }
    };
    let config = {
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Color = sequelize.define(alias,cols,config);

<<<<<<< HEAD
    

=======
 /*    User.associate = function (models) {
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
>>>>>>> 5fe68d0fd36b147860de2a0830d3db6620c7fe96
    return Color
};