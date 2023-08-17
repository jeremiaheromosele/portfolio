import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Sociallinks from "./Components/Sociallinks";



function App() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <About/>
       <Portfolio/>
       <Experience/>
       <Contact/>

       <Sociallinks/>
    </div>
  );
}

export default App;
