// src/components/PlanetCard/PlanetCard.jsx
import './PlanetCard.css';

const PlanetCard = ({ name, distance, image }) => {
  return (
    <figure className="planet-card">
      <img src={image} alt={name} className="planet-image" />
      <figcaption>
        <h3>{name}</h3>
        <p>Distance: {distance}</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;