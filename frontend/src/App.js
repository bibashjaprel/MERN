import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from "./Components/Home/Home.jsx"
import Navbar from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import "./App.css"

function App() {
return <Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
  <Footer />
</Router>
}

export default App;
