import "../assets/Styles.css";
import ida from "../assets/images/bg-ida.png";
import coldw from "../assets/images/bg-coldwar.png";
import ialv from "../assets/images/bg-kanal.png";
import triangle1 from "../assets/images/Triangle1.png";

const movies = [
  { title: "Ida", img: ida },
  { title: "Ils aimaient la vie", img: ialv },
  { title: "Cold War", img: coldw },
];

function MovieCarousel() {
  return (
    <section className="movie-carousel">
      <div className="carousel">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.img} alt={movie.title} className="movie-img" />
            <button className="play-button"><img className="triangle1" src={triangle1} /></button>
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title">L'âge d'or du cinéma polonais (Juillet 2018)</h2>
    </section>
  );
}

export default MovieCarousel;
