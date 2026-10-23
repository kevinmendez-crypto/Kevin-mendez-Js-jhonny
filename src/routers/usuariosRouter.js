//ruta de solo prueba
const {Router} = require("express")
const enrutador = Router()
const{mostrarRutaUsuario,mostrarRutaUsuarioPorId,crearUsuarioController,actualizarUsuarioController} = require("../controllers/rutaUsuariosController")
//funcion (req,res) debe ir en el controlador 
enrutador.get("/listado",mostrarRutaUsuario)
enrutador.get("/listadoPorId",mostrarRutaUsuarioPorId)
enrutador.post("/crear",crearUsuarioController)
enrutador.put("/editar",actualizarUsuarioController)


module.exports = enrutador