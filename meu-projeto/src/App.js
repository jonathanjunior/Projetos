import './App.css'
import SayMayName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

const nome = "Maria"

  return (
    <div className="App">   
      <h1>Testanto CSS</h1>
      <Frase/>
      <Frase/>
      <SayMayName nome="Jonathan"/>
      <SayMayName nome="João"/>
      <SayMayName nome={nome}/>
      <Pessoa
        nome="Jonathan"
        idade="29"
        profissao="Analista de Suporte"
        foto="https://via.placeholder.com/150"/>
    </div>
  )
}

export default App
