const express = require('express');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const dados = {};

const transporte = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true 465, false outras portas
    auth: {
        user: 'awesomeconsultmail@gmail.com',
        //pass: '@wesome19',
        pass: 'ktqrmzubxeyktkvj',
    }
});

function FormatarData(DataEntrada, formato) {
    const data = new Date(DataEntrada);

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();    
    //replace the month
    formato = formato.replace("MM", mes.toString().padStart(2,"0"));        

    //replace the year
    if (formato.indexOf("yyyy") > -1) {
        formato = formato.replace("yyyy", ano.toString());
    } else if (formato.indexOf("yy") > -1) {
        formato = formato.replace("yy", ano.toString().substring(2,2));
    }

    //replace the day
    formato = formato.replace("dd", dia.toString().padStart(2,"0"));

    return formato;
}

const funcoes = {

    EnvioEmail: (dados) => {
        const [, nome] = dados.nome.match(/([^ ]+) /) || [];
        const data = FormatarData(dados.data, 'dd/MM/yyyy');
        transporte.sendMail({
            from: 'AwesomeConsult <awesomeconsultmail@gmail.com>',
            to: dados.email,
            subject: 'Consulta agendada com sucesso!',
            html: '<h1>Olá, '+nome+'!<h1> <p>Sua consulta na especialidade '+dados.tipoConsulta+', foi agendada para o dia '+data+' às '+dados.hora+'!</p>',
            text: 'Olá',
        })
        .then(() => console.log('Email enviado com sucesso!'))
        .catch((err) => console.log('Erro ao enviar email: ', err))
    }
}

app.post("/eventos", (req, res) => {
    try{
        funcoes.EnvioEmail(req.body.dados.texto);
    }
    catch (err){
        res.status(200).send({ msg: "ok" });
    }   
});

app.listen(6000, (() => {
    console.log('Envio Email. Porta 6000');
}));