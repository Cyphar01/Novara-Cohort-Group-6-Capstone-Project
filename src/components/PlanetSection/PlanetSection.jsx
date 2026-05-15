// src/components/PlanetSection/PlanetSection.jsx
import React, { useState, useEffect } from 'react';
import { PLANET_API_ENDPOINT } from '../../services/api';
import PlanetCard from '../PlanetCard/PlanetCard';
import './PlanetSection.css';

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(PLANET_API_ENDPOINT)
      .then(response => response.json())
      .then(data => setPlanets(data))
      .catch(error => console.error("Error fetching planets:", error));
  }, []);

  return (
    <section id="planets" className="planet-section">
      <h2>Explore the Data</h2>
      <div className="planets-grid">
        {planets.map((planet, index) => (
          <PlanetCard 
            key={index} 
            name={planet.name} 
            distance={planet.distance} 
            image={planet.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default PlanetSection;