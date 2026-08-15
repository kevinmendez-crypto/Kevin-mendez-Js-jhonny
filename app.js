import express from 'express';
import "dotenv/config";

const app = express();
const port = process.env.PUERTO || 3000;

app.get("/", (req, res) => {
    res.send('diego es un crack');
});

// Endpoint
app.get("/ruta1", (req, res) => {
    res.send(`<h1>Usando res.send</h1>`);
});

app.get("/ruta2", (req, res) => {
    res.json({ "dev": "node --watch app.js", "script": "node app.js" });
});

app.get("/ruta3/:nombre/:apellido", (req, res) => {
    let nameUsuario = req.params.nombre;
    let apellido = req.params.apellido;
    res.json({ "usuario": nameUsuario, "apellido": apellido });
});

app.get("/ruta4", (req, res) => {
    const phone = req.query.phone || 3162378129;
    const orden = req.query.orden || "sin orden";
    const pagina = req.query.pagina || 1;
    res.send(`<h1>listado de aprendices</h1>
        <h2>El listado en orden: ${orden}</h2>
        <p>Pagina: ${pagina}</p>
        <h3>El telefono es: ${phone}</h3>
        `);
});

app.get("/ruta5/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    if (nombre.length < 3) {
        return res.status(400).send("<h1>Error: El nombre debe tener 3 caracteres</h1>");
    }
    res.send(`<h1>Hola ${nombre}, bienvenido a mi servidor</h1>`);
});

app.get("/ruta6/productos/:nombre", (req, res) => {
    const nombreParam = req.params.nombre.toLowerCase();

    const productos = [
        { id: 1, nombre: "camisa", stock: 15, precioUnitario: 25.00, categoria: "Ropa" },
        { id: 2, nombre: "pantalon", stock: 10, precioUnitario: 40.00, categoria: "Ropa" },
        { id: 3, nombre: "zapatos", stock: 5, precioUnitario: 60.00, categoria: "Calzado" },
        { id: 4, nombre: "gorra", stock: 20, precioUnitario: 15.00, categoria: "Accesorios" }
    ];
    const productoEncontrado = productos.find(p => p.nombre === nombreParam);
    if (!productoEncontrado) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(productoEncontrado);
});

app.get("/ruta7/productos/:categoria/:id", (req, res) => {
    let nameCategoria = req.params.categoria;
    let id = req.params.id;
    res.json({ "categoria": nameCategoria, "id": id });
});


app.get('/usuarios/:id/posts', (req, res) => {
    const { id } = req.params;
    const { orden = 'asc' } = req.query;

    const postsSimulados = [
        { id: 101, titulo: 'Primer post', fecha: '2026-01-10' },
        { id: 102, titulo: 'Segundo post', fecha: '2026-02-15' }
    ];

    const postsOrdenados = orden === 'desc'
        ? [...postsSimulados].reverse()
        : postsSimulados;

    res.json({
        usuarioId: id,
        ordenAplicado: orden,
        publicaciones: postsOrdenados
    });
});

app.get('/usuarios/:id/:posts_id/comentarios', (req, res) => {
    const { id, posts_id } = req.params;
    const { orden = 'asc' } = req.query;


    const comentariosSimulados = [
        { id: 1, texto: 'Excelente publicación', fecha: '2026-02-01' },
        { id: 2, texto: 'Muy interesante todo', fecha: '2026-02-10' }
    ];

    const comentariosOrdenados = orden === 'desc'
        ? [...comentariosSimulados].reverse()
        : comentariosSimulados;

    res.json({
        usuarioId: id,
        postId: posts_id,
        ordenAplicado: orden,
        comentarios: comentariosOrdenados
    });
});


// Logs informativos
const usuario = "Kevin mendez";
console.log(`Bienvenido de nuevo, ${usuario}!`);

const correo = "kevinmendezboff@gmail.com";
console.log(`Tu correo es: ${correo}`);


app.listen(port, () => {
    console.log(`Servidor: http://localhost:${port}`);
});