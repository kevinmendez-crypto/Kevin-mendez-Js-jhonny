import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send('Aprendices ficha 3407186');
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto:`);
});

const usuario = "Kevin mendez";
console.log(`Bienvenido de nuevo, ${usuario}!`);

const correo = "kevinmendezboff@gmail.com";
console.log(`Tu correo es: ${correo}`);

