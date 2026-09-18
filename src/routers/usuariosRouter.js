const {Router} = require("express")
const enrutador = Router()
const holaRuta = require("../controllers/rutaUsuariosController")

//funcion (req, res) debe ir en el controlador 
enrutador.get("/rutaUsuarios", holaRuta)

module.exports = enrutador