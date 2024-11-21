import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Narcos from "./components/Narcos";
import List from "./components/List";

import Trends from "./components/Trends";
import WatchAgain from "./components/WatchAgain";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Narcos />
      <List title={"Revoir"} items={WatchAgain} />
      <List title={"Tendances actuelles"} items={Trends} />
      <Footer />
    </div>
  );
}

export default App;