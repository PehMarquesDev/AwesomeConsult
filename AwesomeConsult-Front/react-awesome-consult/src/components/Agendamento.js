import React, { Component } from 'react'
import './Agendamento.css'
import axios, { toFormData } from 'axios';
import Consultas from './Consultas.js';

export default class Agendamento extends Component {

    constructor(props) {
        super(props);
        this.setChanged = this.setChanged.bind(this);
        {
            this.state = {
                nome: "",
                telefone: "",
                email: "",
                tipoConsulta: "",
                data: "",
                hora: ""
            }
        }
    }

    setChanged(value) {
        this.setState({ tipoConsulta: value });
    }

    agendarClick = (event) => {
        event.preventDefault()
        axios
            .post('http://localhost:5000/agendamento',
                this.state)
            .then((res) => {
                console.log(res.data)
                alert('Olá Sr(a). ' + this.state.nome + '! Sua consulta foi agendada com sucesso!', 'ssss')
                //setPost(res.data);
            })
            .catch((err) => alert('Olá Sr(a). ' + this.state.nome + '! Houve um erro ao agendar sua consulta. Tente novamente mais tarde.'))
        console.log(this.state);
    };


    render() {
        // const today = new Date();
        // today.setDate(today.getDate() + 7);
        // today = today.toISOString().split('T')[0];

        // datefield.min = new Date().toISOString().split("T")[0];

        let preenchido;
        if (this.state.nome == "" || this.state.telefone == "" || this.state.email == "" || this.state.tipoConsulta == "" || this.state.data == "" || this.state.hora == "") {
            preenchido = <input type="submit" value="Agendar"></input>;
        } else {
            preenchido = <input type="submit" value="Agendar" onClick={this.agendarClick}></input>;
        }
        return (
            <div className='agendamento'>
                <form>
                    <h2>Agendamento de Consultas</h2>
                    <label>Digite seu nome:</label><br></br>
                    <input type="text" required onChange={(event => { this.setState({ nome: event.target.value }) })}></input><br></br>
                    <label>Digite seu telefone:</label><br></br>
                    <input type="text" required onChange={(event => { this.setState({ telefone: event.target.value }) })}></input><br></br>

                    <label>Digite seu e-mail:</label><br></br>
                    <input type="text" required onChange={(event => { this.setState({ email: event.target.value }) })}></input><br></br>

                    <label>Em qual especialidade você gostaria de agendar sua consulta?</label><br></br>
                    <Consultas setChanged={this.setChanged}></Consultas>

                    <label>Selecione a data e a hora de sua consulta:</label><br></br>
                    <input type="date" required onChange={(event => { this.setState({ data: event.target.value }) })}></input><br></br>
                    <input type="time" required onChange={(event => { this.setState({ hora: event.target.value }) })}></input><br></br>
                    <p>
                        {/* <input type="submit" value="Agendar" onClick={this.agendarClick}></input> */}
                        {preenchido}
                    </p>

                </form>
            </div>
        )
    }
}