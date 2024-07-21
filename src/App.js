import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
