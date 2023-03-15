import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from "./Components/Home/Home.jsx"
import Navbar from "./Components/Header/Navbar"
import Footer from "./Components/Footer/Footer"
import "./App.css"

function App() {
return <Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  <Footer />
</Router>
}

export default App;
