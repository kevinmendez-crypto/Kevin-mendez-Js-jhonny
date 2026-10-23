const {listarUsuarios, listarUsuarioPorId,crearUsuario,actualizarUsuario,eliminarUsuario} = require("../services/usuariosService")

//Listar usuarios
const mostrarRutaUsuario = async(req, res)=>{
try{
    const usuarios = await listarUsuarios()
    res.json(usuarios)


}catch (error){
    res.status(500).json({mensaje: "Error al comunicarse con la base de datos.",Error:error.message})
}
//res.json({mensaje:"Estos son los usuarios"})
}
//Listar usuarios por id
const mostrarRutaUsuarioPorId = async(req, res)=>{
    const {id} = req.params;
try{
    const usuarios = await listarUsuarioPorId(id)
    res.json(usuarios)
    if(usuarios){
        res.json(usuarios)
    }else{
        res.status(404).json({mensaje:"Usuario no encontrado"})
    }
}catch (error){
    res.status(500).json({mensaje: "Error al comunicarse con la base de datos.",Error:error.message})
}

}

//Crear usuarios
const crearUsuarioController = async (req,res) =>{
    try{
        const {email,name,clave} = req.body;
        const usuarios = await crearUsuario(email,name,clave)
        res.status(201).json({mensaje : "Usuario creado exitosamente", nuevoUsuario: usuarios})
    }catch(error){
        res.status(500).json({mensaje:"Error no se pueden crear usuarios", Error: error.message})
    }
}
//Actualizar usuario
const actualizarUsuarioController= async (req,res) =>{
    const {id} = req.params;
    const {email,name,clave} = req.body;
    try{
        const usuarios = await actualizarUsuario(id,{email,name,clave});
        res.status(200).json({
            mensaje : "Usuario actualizado exitosamente",
            usuarioActualizado: usuarios
        })
    }
    catch(error){
        res.status(500).json({mensaje:"Error al actualizar el usuario", Error:error.message})
    }
}
module.exports = {mostrarRutaUsuario,mostrarRutaUsuarioPorId,crearUsuarioController,actualizarUsuarioController}