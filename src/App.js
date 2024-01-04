import "./styles/App.css";
import "./styles/homepage.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <main>
        <HeroImage />
      </main>
    </div>
  );
}

export default App;

