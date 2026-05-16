import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PlanetSection from './components/PlanetSection/PlanetSection'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  
  return (
    <div id="root">
      <Header />
      <Hero />
      <div className="ticks"></div> {/* using this adds the instructor's divider lines */}
      <PlanetSection />
      <div className="ticks"></div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;
