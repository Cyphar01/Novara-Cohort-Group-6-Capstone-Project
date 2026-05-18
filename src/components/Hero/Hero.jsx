import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Video Layer */}
      <div className="video-container">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/assets/space-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Content Layer - Using the centering logic from the boilerplate */}
      <div className="hero-content">
        <h1>Timeless Spaces</h1>
        <p>A journey through the geomorphology of the cosmos.</p>
        <a href="#planets" className="counter">Explore Data</a>
      </div>
    </section>
  );
};

export default Hero;