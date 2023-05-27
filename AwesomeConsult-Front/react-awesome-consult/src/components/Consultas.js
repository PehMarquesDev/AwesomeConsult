import { useState, useEffect } from 'react'
import './Agendamento.css'
import './Consultas.js'
import axios from 'axios';

const Consultas = () => {

    const [consultas, setConsultas] = useState([])

    const getConsultas = async () => {
        try {
            const response = await axios.get('http://localhost:4000/tipoconsultas');
            const data = response.data;
            console.log(data);
            setConsultas(consultas);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getConsultas();
    }, [])

    return (
        <div className='agendamento'>        
                {<select id="consultas" name="consultas">
                        <option value="consulta">{consultas?.id}</option>
                    </select>}
        </div>
    )
}


export default Consultas;