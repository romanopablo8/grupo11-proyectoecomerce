module.exports = (sequelize, dataTypes) => {
    let alias = 'user_category'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
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
    const user_category = sequelize.define(alias,cols,config);

  
    return user_category

};