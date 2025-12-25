import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'


function App() {

  return (
    <div className="antialiased text-gray-800">
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
      </main>

    </div>
  )
}

export default App
