import "../assets/Styles.css";
import ida from "../assets/images/bg-ida.png";
import coldw from "../assets/images/bg-coldwar.png";
import ialv from "../assets/images/bg-kanal.png";
import triangle1 from "../assets/images/Triangle1.png";

const movies = [
  { title: "Ida", img: ida , desc: "2013 ‧ Drame ‧ 1h 22m" },
  { title: "Ils aimaient la vie", img: ialv , desc: "1957 ‧ Drame ‧ 1h 35m" },
  { title: "Cold War", img: coldw , desc: "2018 ‧ Drame/Mélodrame ‧ 1h 25m" },
];

function MovieCarousel() {
  return (
    <section className="movie-carousel">
      <div className="carousel">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.img} alt={movie.title} className="movie-img" />
            <button className="play-button"><img className="triangle1" src={triangle1} /></button>
            <div className="movie-TD">
              <p className="movie-title">{movie.title}</p><br/>
              <p className="movie-desc">{movie.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="section-title">L'âge d'or du cinéma polonais (Juillet 2018)</h2>
    </section>
  );
}

export default MovieCarousel;
