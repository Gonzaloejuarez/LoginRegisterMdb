const bcrypt = require('bcrypt')
const Usuario = require('../models/User');

const GetLogin = (req, res) => {
const {correo, contraseña} = req.body

Usuario.findOne({correo}).then((usuario) => {
    if(!usuario){
        return res.json({mensaje : "Usuario no encontrado"})
    }
    bcrypt.compare(contraseña, usuario.contraseña).then((password) => {
        if(password){
            const {id, nombre} = usuario;

            res.json({
                mensaje : "Usuario logueado correctamente",
                usuario: {
                    id,
                    nombre
                }
            })
        }else{
            return res.json({mensaje :"contraseña incorrecta"})
        }
    })
})

}


module.exports = GetLogin;