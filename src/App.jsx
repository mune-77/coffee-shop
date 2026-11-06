import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Footer from './footer';
import './App.css'

function App() {
  return(
    <Router>
      <NavBar />
      <Footer />
    </Router>
  )
}

export default App
