
const bcryptjs = require('bcryptjs');

const {	validationResult} = require('express-validator');

const { Op }    = require("sequelize");

const db = require("../Data/models");
const models = require( '../Data/handlers/associations' );

//console.log(models);
//  Connection? 
const sequelize = db.sequelize
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

//   console.log(db);
// console.log(db.User.findAll());
//console.log(sequelize);
//  Connection? 
const dbusercontroller = {

    'list': function( req, res ) {
        db.User.findAll({include: models['user_category']})
        .then(user => {
         //   console.log(user);
            res.render( 'userdb/userlist', {user} );
        });
    },

    'detail': function( req, res ) {
        db.User.findByPk(req.params.id, {include: models['user_category']}
      )
       .then(user => {
       // console.log(JSON.stringify(user, null, 2));
      //  console.log(user);
        res.render( 'userdb/userdetail', {user} );
       });
                   
   },

   'edit': function(req,res) {
    let promcate = db.user_category.findAll();
    let promuser =db.User.findByPk(req.params.id,{include: models['user_category']});
     Promise
     .all([promcate,promuser ])
    .then(([allcate, user]) => {
    res.render( 'userdb/useredit' , {allcate,user}); 
    }); 
   },

   'update': function(req,res) {
    let userId = req.params.id; 
    
     db.User.update(
       {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            category_id: req.body.category_id,
            foto_perfil: req.body.foto_perfil,
        },
        
        {
            where: {id: userId}
    }) .then(()=>{
       return res.redirect('/db/userlist')
    }).catch((error)=>{
        console.log(error);
   // res.render( 'userdb/userlist' ); 
    })   
   },
   add: function(req, res) {
    let promuser = db.User.findAll();
    let promcate = db.user_category.findAll();
    
    Promise
    .all([promuser, promcate])
    .then(([alluser, allcate]) => {
        return res.render('userdb/usercreate', {alluser, allcate})}
    ).catch(error => console.log(error))
    
   },    
   create: function( req, res ) {
    const resultValidation = validationResult(req);
    let promuser = db.User.findAll();
    let promcate = db.user_category.findAll();
    let promemail = db.User.findOne({    where: {  email: req.body.email  }});
    Promise
    .all([promuser, promcate, promemail])
    .then(([alluser, allcate,onemail]) => {
      if (onemail) {
        return res.render('userdb/usercreate', {alluser, allcate,
          errors: {
              email: {
                  msg: 'Este email ya está registrado'
              }
          },
          oldData: req.body
      });
      }
      if (resultValidation.errors.length > 0) {
       
//	console.log(allcate);
        return res.render('userdb/usercreate', {alluser, allcate,
    errors: resultValidation.mapped(),
    oldData: req.body,allcate
  })
  }
 
    }).then(()=> {
      db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        category_id: req.body.category_id,
        foto_perfil:  req.file.filename ? req.file.filename : 'default.png'//req.file.filename,
  })   
       
        
    }).then(()=> {
        return res.redirect('/db/userlist')
        
    })            
    .catch(error => console.log(error))
  
}
}


module.exports = dbusercontroller;