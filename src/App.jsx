import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer/>

      
    </>
  )
}

export default App

