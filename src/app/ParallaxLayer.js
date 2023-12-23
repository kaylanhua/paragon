const ParallaxLayer = ({ image, speed, children }) => {
    const parallaxStyle = {
      backgroundImage: `url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      backgroundSize: 'cover',
      transform: `translateY(${speed}%)`
      
    };
  
    return (
      <div style={parallaxStyle}>
        {children}
      </div>
    );
  };
  
  export default ParallaxLayer;