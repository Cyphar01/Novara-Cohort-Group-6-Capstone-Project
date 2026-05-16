// src/components/PlanetSection/PlanetSection.jsx
import React, { useState, useEffect } from 'react';
import { PLANET_API_ENDPOINT } from '../../services/api';
import PlanetCard from '../PlanetCard/PlanetCard';
import './PlanetSection.css';

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //calling the API to get the planet data
    fetch(PLANET_API_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("First Planet Image Path:", data[0]?.image); 
        
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load planetary data.");
        setLoading(false);
      });
    
  }, []);
  if (loading) return <div className="loader">Loading the Cosmos...</div>;
  if (error) return <div className="error-msg">{error}</div>;

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