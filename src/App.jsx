import './assets/styles/App.css'
import Home from './sections/home'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'



function App() {


  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Services/>
    </div>
  )
}

export default App
