import "../assets/Navbar.css";
import logo from "../assets/images/logo1.png";
import search from "../assets/images/search.svg";
import burger from "../assets/images/burger.svg";
import notif from "../assets/images/notification.svg";
import profil from "../assets/images/avatar.png";
import dd from "../assets/images/dropdown.svg";

function Navbar() {
  return (

    <header>

      <div className="left">

        <img className="logo" src={logo} alt="Netflux" />

        <nav>

          <a className="decouv">Découverte</a>

          <a className="">Séries TV</a>

          <a className="">Films</a>

          <a className="">Programmes originaux</a>
          
          <a className="">Ajouts récents</a>

          <a className="">Ma liste</a>

        </nav>

      </div>

      <a className="burger">

        <img className="burgericon" src={burger} />

      </a>

      <div className="right">

        <a>

          <img src={search} />

        </a>

        <a>Jeunesse</a>

        <a>

          <img src={notif} />

        </a>

        <a className="profil">

          <img src={profil} />

          <img className="dd" src={dd} />

        </a>

      </div>

    </header>

  );
}

export default Navbar;