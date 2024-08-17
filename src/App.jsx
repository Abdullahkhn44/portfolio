import './assets/styles/App.css'
import Home from './sections/home'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Eservices from './components/Eservices'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


function App() {


  return (
    <div className="app">
      <Home />
      <About />
      <Skills />
      <Services/>
      <Eservices/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
