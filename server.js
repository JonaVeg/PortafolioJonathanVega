const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta dist
app.use(express.static(path.join(__dirname, 'PortafolioJonaRailway')));


// Redirige todas las solicitudes al archivo index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Inicia el servidor en el puerto especificado por Railway o en el puerto 8080 por defecto
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});