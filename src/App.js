import "./styles/App.css";
import "./styles/homepage.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import HotelSearch from "./components/HotelSearch";

function App() {
  return (
    <div className="App font-light">
      <Navbar />
      <hr />
      <main>
        <HeroImage />
        <HotelSearch />
      </main>
    </div>
  );
}

export default App;

