import { useState, useEffect } from 'react'
import './Consultas.css'
import axios from 'axios';

const Consultas = (props) => {
    const [listConsultas, setConsultas] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:4000/tipoconsultas')
        .then((res) => {
            setConsultas(res.data);
        })
            .catch((err)=>console.log(err))
    }, [])

    return (
        <div className='select-consultas'>
            {<select required onChange={(event => props.setChanged(event.target.value))}>
            <option option defaultValue=''>Clique para selecionar uma consulta..</option>
                {listConsultas.map((consulta) => <option value={consulta.consulta}>{consulta.consulta}</option>)}
            </select>}
        </div>
    )
}


export default Consultas;