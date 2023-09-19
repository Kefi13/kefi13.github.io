import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro"; 
import About from "./components/About/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
