module.exports = (sequelize, dataTypes) => {
    let alias = 'userCategory'; 
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
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Usercategory = sequelize.define(alias,cols,config);

  /*   Category.associate = function (models) {
        Category.belongsToMany(models.Users, { 
            as: "image",
            foreignKey: "id_userImage"
        })
    } */
    return Usercategory

};