import './App.css'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  return (
    <div className="App">   
      <h1>Testanto Eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
    </div>
  )
}

export default App
