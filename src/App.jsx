import './assets/styles/App.css'
import Home from './sections/home'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Eservices from './components/Eservices'


function App() {


  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Services/>
      <Eservices/>
      
    </div>
  )
}

export default App
