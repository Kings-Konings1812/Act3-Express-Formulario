//imoprtar express
const express = require('express');
//requerimiento para cookie-parser
const cookieParser = require('cookie-parser');
const path = require('path');

//ejecuta la funcion
const app = express();

//codifica el request del body(chacar con postman)
app.use(express.urlencoded());
//funcion default 
app.use(express.json());
app.use(cookieParser());

//rutas de express estructura uderId parametro dinamico
app.post('/users/:userId', (req, res) => {
    const { userId } = req.params || {};
    //parametros despues del query stream
    const { test } = req.query || {};
    //parametros query para los siguientes
    const { name, age } = req.body || {};
    const cookies = req.cookies;
    const headers = req.headers;
    const ip = req.ip;
//esta es la respuesta en metodo  json
    res.json({
        id: userId,
        name,
        age,
        test,
        contentType,
        ip,
        cookies,
        headers,
    });
});

app.get('/users/error', (req, res) => {
    res.status(401).json({
        error: 'hubo algun error',
    });
});

app.get('/users/error-code', (req, res) => {
    res.sendStatus(403);
});

app.get('/users/send', (req, res) => {
    res.status(201).send('<h1>hola como estas</h1>');
});

app.get('/users/send-buffer', (req, res) => {
    res.send(new Buffer('esto es un buffer'));
});

app.get('/users/send-header', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
        'x-mi-cache': 'cacheId',
    });

    res.append('x-mi-cache-v2', 'cacheIdV2');

    res.json({
        status: 'ok',
    });
});

app.get('/users/send-cookie', (req, res) => {
    res.cookie('mi-cookie', '12345', {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24,
    });

    res.json({
        status: 'ok',
    });
});

app.get('/users/clear-cookie', (req, res) => {
    res.clearCookie('mi-cookie');

    res.json({
        status: 'ok',
    });
});

app.get('/users/redirect-location', (req, res) => {
    res.redirect('https://www.google.com?search=react');
});

app.get('/users/download', (req, res) => {
    res.download(path.join(__dirname, 'file.txt'), 'hola.txt');
});
//puerto de escucha 
app.listen(5000, () => console.log('API ready port: 5000...'));
