module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false

        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_userImage: {
           type: dataTypes.INTEGER
        },
        id_userCategory: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias,cols,config);

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
    }*/

    // force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
    // Table created
    return User.create({
        first_name: 'John',
        last_name: 'Hancock',
        email: 'john@hancock.com',
        password:123456,
        
    });
  });
>>>>>>> 5fe68d0fd36b147860de2a0830d3db6620c7fe96
    return User
};