import logo from './logo.svg';
import './App.css';

import Agendamento from './components/Agendamento';

function App() {
  return (
    <div className="App">
      <Agendamento nome="Nome" telefone="telefone" tipoConsulta="consulta" data="data"></Agendamento>
    </div>
  );
}

export default App;
