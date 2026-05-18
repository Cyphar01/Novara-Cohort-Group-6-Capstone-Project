import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-wrapper">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="bg-video"
      >
        {/* Ensure the path matches where you store your mp4 */}
        <source src="/assets/space-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <div className="video-content">
          <h1>Timeless Spaces</h1>
          <p>Precision Engineering. Cosmic Perspective.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;