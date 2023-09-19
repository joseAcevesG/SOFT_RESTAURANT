const path = require('path');
const express = require('express');
const routes = require('./src/rutas');
const app = express();

const port = 3000; 

// Configura la carpeta de archivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Configura una ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.use('', routes);

app.listen(port, () => {
  console.log("App corriendo en el puerto", port);
});
