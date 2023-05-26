const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

consultas = {};

app.get('/tipoconsultas', (req, res) => {
consultas = [{"id":"1","consulta":"Odontologia"},{"id":"2","consulta":"Pediatria"},{"id":"3","consulta":"Cardiologia"},{"id":"4","consulta":"Nutrição"},{"id":"5","consulta":"Neurologia"}];
res.header("Access-control-Allow-Origin", "*");
res.status(201).send(consultas);
});

app.listen(4000, () => {
    console.log('Tipos de consulta ON. Porta 4000');
});