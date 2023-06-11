import "./index.css";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-body text-white font-mono">
      <Navbar />
      <Me />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
