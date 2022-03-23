
const db = require('../database/models');

const personajesControllers = {
    list: (req,res) => {
        db.Personaje.findAll()
        .then(personajes => {
            let respuesta = {
                meta: {
                    status:200,
                    total:personajes.length
                },

                data: personajes
            }

            res.json(respuesta)
        })

        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    create: (req,res) => {
        db.Personaje.create({ include: [{ all: true }]},
            {
            Imagen:req.body.Imagen,
            Nombre:req.body.Nombre,
            Edad:req.body.Edad,
            Peso:req.body.Peso,
            Historia:req.body.Historia,
            
            
        }).then(confirm => {
           
            
              let respuesta;
              if(confirm) {
                  respuesta = {
                    meta: {
                        status:200,
                        total:confirm.length,
                        url:"characters/create"
                    },

                    data: confirm

                    
                }
            }
            else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url:"characters/create"
                    },
                    data:confirm
                }
            }

                res.json(respuesta)
            

            
        })

        .catch(error => res.send(error))
    },

    update: (req,res) => {

        let personajeId = req.params.id;
        db.Personaje.update({
            Imagen:req.body.Imagen,
            Nombre:req.body.Nombre,
            Edad:req.body.Edad,
            Peso:req.body.Peso,
            Historia:req.body.Historia,
            
         },
         {
             where : {
                 id:personajeId
             }
         }) .then(confirm => {
             let respuesta = {
                 meta : {
                     status: 200,
                     total: confirm.length,
                     url: "characters/update/:id"
                 },

                 data: confirm
             }

             res.json(respuesta)
         }) 
         .catch(error => res.send(error))
    },

    destroy: (req,res) => {
        let personajeId = req.params.id
        db.Personaje.destroy({where:personajeId, force:true})
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta = {
                    meta: {
                        status:200,
                        total:confirm.length,
                        url:'characters/delete/:id'
                    },
                    
                        data:confirm
                    
                }
            }
            res.json(respuesta)
        })
        .catch(error=> res.send(error))
    }

    
}

module.exports = personajesControllers