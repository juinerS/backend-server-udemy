var express = require('express');

// Inicializando las variables
var app = express();


app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada satisfactoriamente'
    });
});

module.exports = app;