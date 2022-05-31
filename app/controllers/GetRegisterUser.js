const bcrypt = require('bcrypt');
const Usuario = require('../models/User');

const GetRegisterUser = (req, res) => {
const {nombre, correo, contraseña} = req.body

Usuario.findOne({correo}).then((usuario) => {
    if(usuario){
        return res.json({mensaje: "Ya existe un usuario con ese nombre"})
    }else if (!nombre || !correo || !contraseña){
        return res.json({mensaje: "Falta completar los campos"})
    }else{
        bcrypt.hash(contraseña, 10, (error, contraseñaHash) => {
            if(error){res.json({error})}
            else{
                const nuevoUsuario = new Usuario({
                    nombre,
                    correo,
                    contraseña : contraseñaHash,
                })

                nuevoUsuario.save().then((usuario) => {
                    res.json({ mensaje : "Usuario creado correctamente", usuario})
                }).catch((error) => console.error(error))
            }
        })
    }
})

}


module.exports = GetRegisterUser;