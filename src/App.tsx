import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Artists from './components/Artists'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Gallery />
      <Artists />
      <Process />
      <Contact />
    </div>
  )
}

export default App