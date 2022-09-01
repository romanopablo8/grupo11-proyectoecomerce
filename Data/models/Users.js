module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
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
        category_id: {
            type: dataTypes.INTEGER,// REVISAR SI ES INTEGER
        },
        foto_perfil: {
            type: dataTypes.STRING//revisar tipo dato
         },

    };
    let config = {
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias,cols,config);

   
   
// PROBANDO INGRESAR DATOS EN LA BD
   // force: true will drop the table if it already exists
/*     User.sync({force: false}).then(() => {
    // Table created
    return User.create({
        firstname: 'John',
        lastname: 'Hancock',
        email: 'john@hancock.com',
        password:123456,
        
    });
  }); 
   */
  return User    
};