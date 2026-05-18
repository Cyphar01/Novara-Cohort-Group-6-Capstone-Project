// src/components/PlanetSection/PlanetSection.jsx
import React, { useState, useEffect } from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import './PlanetSection.css';

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This points to the file in public/images/planets.json
    fetch('/images/planets.json')
      .then((response) => {
        if (!response.ok) throw new Error("Could not find the planet data.");
        return response.json();
      })
      .then((data) => {
        // Accessing the 'planets' array from your JSON
        setPlanets(data.planets); 
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
            // Show the distance in million km (e.g., 57.9)
            distance={planet.distance_from_sun_km / 1000000} 
            // Passes the NASA link from your JSON directly to the card
            image={planet.image} 
          />
        ))}
      </div>
    </section>
  );
}; 

export default PlanetSection;