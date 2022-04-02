import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Topbar";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Process from "./components/Process";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
<Route path="/"element={
      <div className="sections">
        <Intro/>
        <Projects/>
        <Process/>
        <Contact/>
        <Footer/>
        
      </div>
      }/>
      <Route path="/about" element={<><About/> <Footer/> </>}/>
      <Route path="/skill" element={
        <Skill/>

      }/>
      </Routes>
    </Router>
  )
}

export default App;
