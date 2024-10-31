import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/navigation'
import Project from './components/projects'
import './App.css'

function App() {
  retrun(
    <div>
      <Header />
      <Nav />
      <main>
        <Project />
      </main>
      <Footer />
    </div>
  )
}

export default App
