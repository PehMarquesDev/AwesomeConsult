const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

consultas = {};

app.get('/tipoconsultas', (req, res) => {
consultas = [{"Id":"1","Consulta":"Odontologia"},{"Id":"2","Consulta":"Pediatria"},{"Id":"3","Consulta":"Cardiologia"},{"Id":"4","Consulta":"Nutrição"},{"Id":"5","Consulta":"Neurologia"}];
res.header("Access-Control-Allow-Origin", "*");
res.status(201).send(consultas);
});

app.listen(4000, () => {
    console.log('Tipos de Consulta ON. Porta 4000');
});