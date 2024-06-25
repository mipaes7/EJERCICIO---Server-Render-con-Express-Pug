const express = require("express");
const app = express(); // Inicializar servidor
// require('dotenv').config();
const port = 3000;
 
// Importar middlewares
const morgan = require("./middlewares/morgan");

// Logger Morgan
app.use(morgan(':method :url :status - :response-time ms :body'));

//Importar rutas
const filmsWebRoutes = require("./routes/films.web.routes");

app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({extended: true}));

// CONFIGURACIÓN DE VISTAS PUG -- Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public')); // Habilito la carpeta public para archivos estáticos

app.use('/',filmsWebRoutes);

app.listen(port, () => { // Servidor está escuchando en este puerto variable port
    console.log(`Example app listening on http://localhost:${port}`);
});