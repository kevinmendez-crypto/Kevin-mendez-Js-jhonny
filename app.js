const express = require('express');
const app = express();
require('dotenv') .config();
const port = process.env.PUERTO || 3000;

//middleware para pasear datos del body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send('Aprendices ficha 3407186');
});
//LISTAR APRENDICES
app.get("/api/aprendices", (req, res) => {
    res.json({
        "mensaje":"LISTA DE APRENDICES :)"
    })
})



//ENPOINT PARA CREAR APRENDICES
app.post("/api/aprendices", (req, res)=>{
    res.status(200).json({
        "mensaje":"crear aprendices"
    })
})

//ENPOINT PARA editar aprendices 
app.put("/api/aprendices/:id", (req, res)=>{
    res.status(200).json({
        "mensaje":"editar aprendices"
    })
})

//ENPOINT PARA ELIMINAR APRENDICES 
app.delete ("/api/aprendices/:id", (req, res)=>
    res.status(200).json({
        "mensaje":"eliminar aprendices"
    })
)

//ENPOINT PARA LISTAR UN APRENDIZ 
app.get ("/api/aprendices/:id", (req, res)=>
    res.status(200).json({
        "mensaje":"listar un aprendiz"
    })
)

app.post("/rutaJson", (req, res)=>{
    const todosDatos = req.body
    const edad = req.body.edad2
    if (edad>=18) {
        res.json({mensaje: "es mayor"})
    } else{
        res.json({mensaje: "es menor"})
    }
    res.json({datosJson: todosDatos})
})

app.post("/rutaFormulario", (req, res)=>{
    const todosDatos = req.body
    const programa = req.body.programa
    res.json({todosDatos: todosDatos, MiPrograma: programa})
})



app.listen(port, () => {
    console.log(`SERVIDOR: http://localhost:$(port)`);
});


