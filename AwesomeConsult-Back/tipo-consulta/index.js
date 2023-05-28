const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

consultas = {};

// Ordena por ordem alfabética
function compare(c1, c2, index) {
    return c1[index] == c2[index] ? 0 : (c1[index] < c2[index] ? -1 : 1);
}

app.get('/tipoconsultas', (req, res) => {
    consultas = [{ "id": "1", "consulta": "Odontologia" }, { "id": "2", "consulta": "Pediatria" }, { "id": "3", "consulta": "Cardiologia" }, { "id": "4", "consulta": "Nutrição" }, { "id": "5", "consulta": "Neurologia" }, { "id": "6", "consulta": "Oftalmologia" }, { "id": "7", "consulta": "Psiquiatria" }, { "id": "8", "consulta": "Urologia" }, { "id": "9", "consulta": "Otorrinolaringologia" }, { "id": "10", "consulta": "Cirurgias (Geral)" }, { "id": "11", "consulta": "Fonoaudiologia" }, { "id": "12", "consulta": "Terapia ocupacional" },{ "id": "13", "consulta": "Psicologia" },{ "id": "14", "consulta": "Dermatologia" },{ "id": "15", "consulta": "Ginecologia" },{ "id": "16", "consulta": "Endocrinologia" },{ "id": "17", "consulta": "Gastroenterologia" }];

    consultas.sort(function (c1, c2) {
        return compare(c1, c2, "consulta")
    });

    res.header("Access-control-Allow-Origin", "*");
    res.status(201).send(consultas);
});

app.listen(4000, () => {
    console.log('Tipos de Consulta ON. Porta 4000');
});