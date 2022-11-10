import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Second from './components/Second'
import About from './components/About'
import Svglines from './components/Svglines'
import { useEffect } from 'react'

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])








  return (
    <div className="App">
      <Head />
      <Second offsetY={offsetY} />
      <About />
      <Svglines />
      <div className="section"></div>
    </div>
  )
}

export default App
