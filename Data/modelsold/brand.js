module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        brand: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_model: {
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
    const Brand = sequelize.define(alias,cols,config);

    return Brand
};