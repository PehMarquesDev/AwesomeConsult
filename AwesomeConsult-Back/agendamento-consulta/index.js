const express = require('express');
const axios = require("axios");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

const consultas = {};
contador = 0;

app.post('/agendamento',bodyParser.json(),async (req, res) => {
    contador++;
    const texto = req.body;
    consultas[contador] = {
    contador, texto
    }
    //console.log(texto.email)
    //console.clear();
    res.header("Access-control-Allow-Origin", "*");
    res.status(201).send(consultas);

    await axios.post("http://localhost:10000/eventos", {
        tipo: "ConsultAgendada",
        dados: {
            contador,
            texto,
        },
    });
});

app.listen(5000, () => {
    console.log('Agendamentos ON. Porta 5000');
});