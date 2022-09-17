const { Op }    = require("sequelize");
const db = require("../../Data/models");
const models = require( '../../Data/handlers/associations' );

const userAPIController = {
    'list': (req, res) => {
        db.User.findAll({include: models['user_category']})
        .then(users => {
          
            let list =[];
           
users.forEach(user => {
    let usuario ={};
    usuario['id'] = user.id
    usuario['firstname'] = user. firstname
    usuario['lastname'] = user.lastname
    usuario['email'] = user.email
    usuario['detail'] = `api/users/${user.id}`
    list.push(usuario)

 });
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users/'
                },
                data:{count:users.length,
                     list:list
                },
                users 
            
            }
                res.json(respuesta);
        });
    },
    'detail': function( req, res ) {
       // db.User.findByPk(req.params.id, {include: models['user_category']}
        db.User.findByPk(req.params.id, {attributes: ["id", "firstname", "lastname","email", "foto_perfil"]}
      )
       .then(user => {
        let respuesta = {
            meta: {
                status: 200,
                 url: 'api/users/:id'
            },
            user:{user,url: `api/users/${user.id}`},
            data:{
                  id: user.id,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                  foto_perfil:`http://localhost:3000/img/users/${user.foto_perfil}`,
                  url: `api/users/${user.id}`
                 
            } 
        }
        res.json(respuesta);
       });
                   
   },
   detail2: async(req,res) => {

    try {

        let resrespuesta  = await   db.User.findByPk(1, {attributes: ["id", "firstname", "lastname","email", "foto_perfil"]}
        )
        res.json(resrespuesta  ) 
    }
    catch( err ) {

        console.log( err );

    }
    
}

    
/*     
api/users/
○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de usuarios en la base.
■ users → array con la colección de usuarios, cada uno con:
● id
● name
● email
● detail → URL para obtener el detalle.

● api/users/:id
○ Deberá devolver un objeto literal con la siguiente estructura:
■ Una propiedad por cada campo en base.
■ Una URL para la imagen de perfil (para mostrar la imagen).
■ Sin información sensible (ej: password y categoría). 
*/
}
module.exports = userAPIController;