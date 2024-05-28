import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App container mx-auto px-4 py-4">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
