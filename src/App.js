import "./styles/App.css";
import "./styles/homepage.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <main>
        <div className="mx-6 my-2 max-h-56 rounded-lg hero grid place-content-center text-white">
          <div className="backdrop-brightness-50 px-2">
            <h2 className="text-5xl font-bold">plan your dream trip</h2>
            <p>over 1 million rooms awaiting for you</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
