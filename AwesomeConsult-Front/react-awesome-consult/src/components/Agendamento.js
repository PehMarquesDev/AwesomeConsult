import React, { Component } from 'react'
import './Agendamento.css'
import axios from 'axios';

 async function consulta() {
     const response = await axios.get('http://localhost:4000/tipoconsultas')
     return response;
 }

export default class Agendamento extends Component {

    constructor(props) {
        super(props);
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

    agendarClick = () => {
        console.log(this.state)
        console.log(Console())
    };

    render() {
        async function consulta() {
            const response = await axios.get('http://localhost:4000/tipoconsultas')
            return response;
        }
        console.log(consulta().data)
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
                    {<select id="consultas" name="consultas">
                        <option value="consulta">consulta.dados</option>
                    </select>}

                    <input type="text" required onChange={(event => { this.setState({ tipoConsulta: event.target.value }) })}></input><br></br>
                    <label>Selecione a data e a hora de sua consulta:</label><br></br>
                    <input type="date" required onChange={(event => { this.setState({ data: event.target.value }) })}></input><br></br>
                    <input type="time" required onChange={(event => { this.setState({ hora: event.target.value }) })}></input><br></br>
                    <p>
                        <input type="submit" value="Agendar" onClick={this.agendarClick}></input>
                    </p>

                </form>
            </div>
        )
    }
}