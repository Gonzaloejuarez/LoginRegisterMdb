const { model , Schema } = require('mongoose');

const Usuario = new Schema({
    nombre : { type : String, required:true},
    correo : {type : String, required:true},
    contraseña : {type: String, required:true}
})

module.exports = model('Usuario', Usuario);