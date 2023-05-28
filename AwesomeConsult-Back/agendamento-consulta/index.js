const express = require('express');
const app = express();

const consultas = {};
contador = 0;

app.post('/agendamento', (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = {
    contador, texto
    }
    res.header("Access-control-Allow-Origin", "*");
    res.status(201).send(consultas);
console.log("chegou post aqui")
});

app.listen(5000, () => {
    console.log('Lembretes. Porta 5000');
});