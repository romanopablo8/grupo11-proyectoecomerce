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
    
}

module.exports = controller;