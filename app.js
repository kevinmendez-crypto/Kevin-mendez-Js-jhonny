const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send('Aprendices ficha 3407186');
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto de la consola:`);
});

