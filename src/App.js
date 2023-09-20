import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro"; 
import About from "./components/About/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
