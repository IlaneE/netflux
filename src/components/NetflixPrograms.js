import "../assets/Styles.css";
import marseille from "../assets/images/marseille.svg";
import stranger from "../assets/images/stranger.svg";
import secretc from "../assets/images/secretcity.svg";
import cuba from "../assets/images/cubalibre.svg";
import soupcons from "../assets/images/soupcons.svg";
import lalien from "../assets/images/lalieniste.svg";


const programs = [
  { title: "Marseille", img: marseille },
  { title: "Stranger Things", img: stranger },
  { title: "Secret City", img: secretc },
  { title: "Cuba Libre", img: cuba },
  { title: "Soupçons", img: soupcons },
  { title: "L'aliéniste", img: lalien },
];

function NetflixPrograms() {
  return (
    <section className="netflix-programs">
      <h2 className="section-title">Programmes Originaux Netflix</h2>
      <div className="program-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img src={program.img} alt={program.title} className="program-img" />
            <p className="program-title">{program.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NetflixPrograms;
