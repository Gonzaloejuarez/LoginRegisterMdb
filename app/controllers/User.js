const Usuario = require('../models/User')

const GetUser = (req, res) => {
const {userId} = req.params
if(userId.length === 24){
    Usuario.findById(userId).then((usuario) => {
        if(!usuario){
            return res.json({mensaje : "Usuario no encontrado"});
        }else{
            const {_id, contraseña, __v, ...resto} = usuario._doc;
            res.json(resto)
        }
    })
}else
res.json({mensaje : "Estas enviando la contrasenia incorrecta"})
}

module.exports = GetUser