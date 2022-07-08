const fs = require('fs');
const path = require('path');

const user = require('../models/user');

const bcryptjs = require('bcryptjs');
const {	validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
    
    login: function( req, res ) {
        res.render('users/login')
    },
    register: function(req,res){
        
        res.render('users/register');
    },
    registerStore: function(req,res){
        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
/*
        let users = JSON.parse( fs.readFileSync( usersFilePath, 'utf-8' ) );
		const id     = users.length + 1;
        
		let firstname       = req.body.firstname;
		let lastname        = req.body.lastname;
		let email           = req.body.email;
        //let password        = req.body.password;
        let password        = bcryptjs.hashSync(req.body.password, 10);
		let category        = req.body.category;
        let foto_perfil     = req.file.originalname;
		
        let newUsers = {
			id: id,
            firstname: firstname,
            lastname:lastname,
			email : email,
            category:category,
            password :password,
            foto_perfil:foto_perfil,
							
		         		};

console.log(newUsers)
        users.push( newUsers );

		fs.writeFileSync( usersFilePath , JSON.stringify( users ), { encoding: 'utf-8' } );
*/
let userInDB = user.findByField('email', req.body.email);

if (userInDB) {
    return res.render('users/register', {
        errors: {
            email: {
                msg: 'Este email ya está registrado'
            }
        },
        oldData: req.body
    });
}

let userToCreate = {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password, 10),
    avatar: req.file.filename
}
//console.log(userToCreate)
user.create(userToCreate);

	
return res.redirect( '/login' );   
       
},
    processlogin: function(req,res){
        
        let userToLogin = user.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('profile');
			} 
			return res.render('users/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
    },

    profile: (req, res) => {
		return res.render('users/userProfile', {
			user: req.session.userLogged
		});
	},
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}
module.exports = controller;