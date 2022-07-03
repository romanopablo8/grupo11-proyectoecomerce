const fs = require('fs');
const path = require('path');


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
    
    login: function( req, res ) {
        res.render('users/login')
    },
    register: function(req,res){
        res.render('users/register');
    },
    registerStore: function(req,res){
        let users = JSON.parse( fs.readFileSync( usersFilePath, 'utf-8' ) );
		const id     = users.length + 1;

		let firstname       = req.body.firstname;
		let lastname        = req.body.lastname;
		let email           = req.body.email;
        let password        = req.body.password;
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

		res.redirect( '/products' );   
       
},
    processlogin: function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let usersJSON = fs.readFileSync('users.json', {encoding: 'utf-8'})
            let users;
            if(usersJSON == "" ){
                users= []
            }else {
                users = JSON.parse(usersJSON)
            }

            for(let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioALogearse = users[i]
                        break;
                    }
                }
            }
        }
        return res.render('users/login', {errors: errors.errors})
    }
}
module.exports = controller;