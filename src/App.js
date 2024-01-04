import "./styles/App.css";
import "./styles/homepage.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import HotelSearch from "./components/HotelSearch";
import Destinations from "./components/Destinations";

function App() {
  return (
    <div className="App font-light ">
      <Navbar />
      <hr />
      <main className="px-14">
        <HeroImage />
        <HotelSearch />
        <Destinations />
      </main>
    </div>
  );
}

export default App;

