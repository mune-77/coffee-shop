import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Home from './pages/home';
import Footer from './footer';
import './App.css'

function App() {
  return(
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
