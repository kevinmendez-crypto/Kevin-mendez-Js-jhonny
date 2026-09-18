const {Router} = require("express")
const enrutador = Router()
const mostrarRuta = require("../controllers/rutaPruebaController")

//funcion (req, res) debe ir en el controlador 
enrutador.get("/rutaPersonal", (req,res)=>{
    res.json({mensaje: "es mi rutaPrueba y rutaPersonal"})
})

module.exports = enrutador