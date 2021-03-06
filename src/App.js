import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
