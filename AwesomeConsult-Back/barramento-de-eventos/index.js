const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');
const app = express();
app.use(bodyParser.json());

const eventos = []

app.post('/eventos', async (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //console.log(req.body);
    try {
    //envia o evento para o microsservico de envio de email
        await axios.post("http://localhost:6000/eventos", evento);
    }
    catch (error) {
        console.log("O serviço de envio de email está indisponível")
    }
    res.status(200).send({ msg: "ok" });
});

app.get('/eventos', (req, res) => {
    res.send(eventos)
})


app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000.')
})