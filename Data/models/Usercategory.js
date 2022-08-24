module.exports = (sequelize, dataTypes) => {
<<<<<<< HEAD
    let alias = 'Tabla_name'; 
=======
    let alias = 'userCategory'; 
>>>>>>> 5fe68d0fd36b147860de2a0830d3db6620c7fe96
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
    const Tabla_name = sequelize.define(alias,cols,config);

<<<<<<< HEAD
  
    return Tabla_name
=======
  /*   Category.associate = function (models) {
        Category.belongsToMany(models.Users, { 
            as: "image",
            foreignKey: "id_userImage"
        })
    } */
    return Usercategory
>>>>>>> 5fe68d0fd36b147860de2a0830d3db6620c7fe96

};