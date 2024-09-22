import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import cross from './Assets/cross-banner.png'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <img src={cross} alt="Not Found" className='cross-banner' />
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
