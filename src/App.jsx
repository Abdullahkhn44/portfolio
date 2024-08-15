import './assets/styles/App.css'
import Home from './sections/home'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Eservices from './components/Eservices'
import Work from './sections/Work'


function App() {


  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Services/>
      <Eservices/>
      <Work/>
    </div>
  )
}

export default App
