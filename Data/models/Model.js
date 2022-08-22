module.exports = (sequelize, dataTypes) => {
    let alias = 'Model'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        model: {
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
    const Model = sequelize.define(alias,cols,config);

   
    return Model
};