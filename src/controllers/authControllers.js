const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




const authControllers = {
    login: (req, res) => {
        let { email, password } = req.body;

        db.User.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if (!user) {
                res.status(404).json({ msg: "Usuario no encontrado" })
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    let token = jwt.sign({ user: user },"secret", {
                        expiresIn: "7d"
                    });

                    res.json({

                        user: user,
                        token: token,
                        
                    })

                } else {
                    res.status(401).json({ msg: "Password incorrecto" })
                }
            }
        })
    },

    register: (req, res) => {

        // Encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, 10);

        // Crear un usuario
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {

            // Creamos el token
            let token = jwt.sign({ user: user },"secret", {
                expiresIn: "7d"
            }); 

            res.json({
                user: user,
                token: token, 

            })

            
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

    }

}

module.exports = authControllers

