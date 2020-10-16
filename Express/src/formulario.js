//imoprtar express
const express = require('express');
//requerimiento para cookie-parser
const cookieParser = require('cookie-parser');
const path = require('path');
//ejecuta la funcion
const app = express();
//requiere ael archivo validaciones
const validations = requiere('./validations')


app.post('/users', (req , res) => {
    validations.createUsersValidation(req.body);

    const { name, age , email} = req.body;    

    res.json({
        status: 'ok',
    });
});

//validacin a travez de los sig campos
app.post('/users', (req, res) =>{
    const { name, age, email } = req.body;

    validations.createUsersValidation(req.body);


    res.json({
        status:'ok',
    });
});

app.put('/users/:id',(req, res) =>{

});

//midelware  cuando se produce una exepcion
app.user((error, req, res , next) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});

//puerto de escucha 
app.listen(5000, () => console.log('API ready port: 5000...'));