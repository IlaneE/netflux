import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Narcos from "./components/Narcos";
import List from "./components/List";

import Trends from "./components/Trends";
import WatchAgain from "./components/WatchAgain";

import Agedor from "./components/Agedor";
import MovieCarousel from "./components/MovieCarousel";
import NetflixPrograms from "./components/NetflixPrograms";
import Categories from "./components/Categories";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Narcos />
      <List title={"Revoir"} items={WatchAgain} />
      <List title={"Tendances actuelles"} items={Trends} />
      <Agedor />
      <MovieCarousel />
      <NetflixPrograms />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;