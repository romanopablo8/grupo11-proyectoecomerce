module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false

        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false

        },
        category_id: {
            type: dataTypes.INTEGER,

        },
        image: {
            type: dataTypes.STRING//revisar tipo dato
         
        },
        color_id: {
            type: dataTypes.INTEGER,
            //allowNull: false
        
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        reference: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcionfull: {
           type: dataTypes.TEXT,
           allowNull: false
        },
        

    };
    let config = {
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);
    
  // PROBANDO INGRESAR DATOS EN LA BD
   // force: true will drop the table if it already exists
  /*   Product.sync({force: false}).then(() => {
    // Table created
    return Product.create({
        
        "name": "Trippledex",
        "descripcion": "felis ut at dolor quis",
        "category_id": 1,
        "image": "depochild16.jpg",
        "color_id": 1,
        "price": 2747,
        "discount": 22,
        "reference": "247-72-3051",
        "descripcionfull": "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis"
   
  
        
    });
  });  */
    return Product
};