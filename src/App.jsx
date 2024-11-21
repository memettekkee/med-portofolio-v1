import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Learning from "./pages/learning"
import Project from "./pages/project"
import Contact from "./pages/contact"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/learning" element={<Learning />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
