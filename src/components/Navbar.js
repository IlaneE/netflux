import "../assets/Navbar.css";
import logo from "../assets/images/logo1.png";
import search from "../assets/images/search.svg";
import burger from "../assets/images/burger.svg";
import notif from "../assets/images/notification.svg";
import profil from "../assets/images/avatar.png";
import dd from "../assets/images/dropdown.svg";
import croix from "../assets/images/croix-blanche.png";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="blackleft"></div>
      <div className="left">
        <img className="logo" src={logo} alt="Netflux" />
        <nav className={menuOpen ? "menu-open" : ""}>
          <a className="burger" id="burger" onClick={toggleMenu}>
            <img className="burgericon" src={croix} alt="Menu" />
          </a>
          <a className="decouv">Découverte</a>
          <a>Séries TV</a>
          <a>Films</a>
          <a>Programmes originaux</a>
          <a>Ajouts récents</a>
          <a>Ma liste</a>
        </nav>
      </div>

      <a className="burger" onClick={toggleMenu}>
        <img className="burgericon" src={burger} alt="Menu" />
      </a>

      <div className="right">
        <a>
          <img src={search} alt="Search" />
        </a>
        <a>Jeunesse</a>
        <a>
          <img src={notif} alt="Notifications" />
        </a>
        <a className="profil">
          <img src={profil} alt="Profil" />
          <img className="dd" src={dd} alt="Dropdown" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
