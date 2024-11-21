import "../assets/Narcos.css";

import play from "../assets/images/play.png";
import plus from "../assets/images/plus.png";
import narcosBG from "../assets/images/narcosbg.png";
import netflixOriginal from "../assets/images/netflix_original.svg";
import logoNarcos from "../assets/images/logo-narcos.svg";

function Narcos() {
  return (
    <div className="narcos">
      <img src={narcosBG} className="bg" />
      <div className="contain">
        <div className="title">
          <img src={netflixOriginal} className="netflixor" />
          <img src={logoNarcos} className="logoh" />
        </div>

        <div className="content">
          <h2>Regardez la saison 3 maintenant</h2>
          <p className="desc">
            Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
            d’Escobar passent à l’action et déclarent la guerre au gouvernement.
          </p>
        </div>
        <div className="ctas">
          <a className="cta">
            <img src={play} alt="Play" />
            Lecture
          </a>
          <a className="cta">
            <img src={plus} alt="Plus" />
            My List
          </a>
        </div>
      </div>
    </div>
  );
}

export default Narcos;    