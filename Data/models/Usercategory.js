module.exports = (sequelize, dataTypes) => {
    let alias = 'Tabla_name'; 
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
    const Tabla_name = sequelize.define(alias,cols,config);

  
    return Tabla_name

};