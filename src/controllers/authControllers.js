const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../database/config/config');



const authControllers = {
    login : (req,res) => {
        let {email, password} = req.body;

        db.User.findOne({
            where:{
                email:email
            }
        }) .then(user => {
            if(!user) {
                res.status(404).json({msg: "Usuario no encontrado"})
            } else{
                if(bcrypt.compareSync(password, user.password)) {
                
                    let token = jwt.sign({user:user}, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({

                        user:user,
                        token:token
                    })

                } else{
                    res.status(401).json({msg:"Password incorrecto"})
                }
            }
        })
    },

    register: (req,res) => {

        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds)
    
    db.User.create({
        name: req.body.name,
        email:req.body.email,
        password:password
    }) .then(user => {

        let token = jwt.sign({user:user}, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        
        res.json({
            user: user,
            token: token
        })

    }) .catch (err => {
        res.status(500).json(err);
    })

    }
}

module.exports = authControllers

