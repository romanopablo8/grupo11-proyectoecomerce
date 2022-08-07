module.exports = (sequelize, dataTypes) => {
    let alias = 'Usercategory'; 
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
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Usercategory = sequelize.define(alias,cols,config);

    Category.associate = function (models) {
        Category.belongsToMany(models.Users, { 
            as: "image",
            foreignKey: "id_userImage"
        })
    }
    return Usercategory

};