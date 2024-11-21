import "../assets/Styles.css";
import poland from "../assets/images/bg-poland.png";

function Agedor() {
  return (
    <header
      className="agedor"
      style={{
        backgroundImage: `url(${poland})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content1">
        <h1 className="title1">
          L'ÂGE D'OR DU CINÉMA <span className="highlight">POLONAIS</span>
        </h1>
        <div className="subtitle">
          <p className="subtitle1">Netflix Découverte - Juillet 2018</p>
          <p className="descage">Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
          Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène
          internationale.</p>
        </div>
      </div>
    </header>
  );
}

export default Agedor;
