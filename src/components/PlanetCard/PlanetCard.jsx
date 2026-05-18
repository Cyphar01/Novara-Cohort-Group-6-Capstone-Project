// src/components/PlanetCard/PlanetCard.jsx
import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ name, image, distance }) => {
  return (
    <figure className="planet-figure">
      <img 
        src={image} 
        alt={`Visual representation of ${name || 'planet'}`} 
        className="planet-image"
      />
      <figcaption>
        <h3>{name}</h3>
        <p>Distance: {distance} million km</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;