import "./styles/App.css";
import "./styles/homepage.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import HotelSearch from "./components/HotelSearch";
import Destinations from "./components/Destinations";
import ExclusiveOffer from "./components/ExclusiveOffer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-light ">
      <Navbar />
      <hr />
      <main className="px-14">
        <HeroImage />
        <HotelSearch />
        <Destinations />
        <ExclusiveOffer />
        <hr />
        <Footer />
      </main>
    </div>
  );
}

export default App;

