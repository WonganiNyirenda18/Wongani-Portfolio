import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'


function App() {

  return (
    <div className="antialiased text-gray-800">
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
        <Services />
        <Contacts />
        <Footer />
      </main>

    </div>
  )
}

export default App
