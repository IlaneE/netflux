import "../assets/Footer.css";

import fb from "../assets/images/fb.svg";
import insta from "../assets/images/insta.svg";
import X from "../assets/images/X.svg";
import ytb from "../assets/images/ytb.svg";


function Footer() {
    return (
        <footer>

            <div className="social">

                <img src={fb} alt="Fb" />
                <img src={insta} alt="Insta" />
                <img src={X} alt="X" />
                <img src={ytb} alt="Ytb" />

            </div>

            <div className="lien">

                <ul>

                    <li><a href="#">Audio et sous-titres</a></li>
                    <li><a href="#">Presse</a></li>
                    <li><a href="#">Confidentialité</a></li>
                    <li><a href="#">Nous contacter</a></li>

                </ul>

                <ul>

                    <li><a href="#">Autodescription</a></li>
                    <li><a href="#">Relations investisseurs</a></li>
                    <li><a href="#">Informations légales</a></li>
                </ul>

                <ul>

                    <li><a href="#">Centre d’aide</a></li>
                    <li><a href="#">Recrutement</a></li>
                    <li><a href="#">Préférences de cookies</a></li>

                </ul>

                <ul>

                    <li><a href="">Cartes cadeaux</a></li>
                    <li><a href="">Conditions d’utilisation</a></li>
                    <li><a href="">Mentions légales</a></li>

                </ul>

            </div>

            <div className="btnd">

                <a href="" className="btn">Service code</a>
                <p className="date">© 1997-2018 Netflix, Inc.</p>

            </div>

        </footer>
    );
}

export default Footer;