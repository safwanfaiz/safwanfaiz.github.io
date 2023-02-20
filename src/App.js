import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home.jsx';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import States from './Components/States';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Home  />
     <About />
     <Skills />
     <States/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
