import React, { useState, useEffect } from 'react';
import Cake from './Cake';

function Land() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);

  // Add event listener to update screen size dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? (
        // SVG for screens larger than 1440px
        <svg 
          viewBox="0 0 1200 300" 
          style={{
            position: "absolute", 
            bottom: 0, 
            width: "100%", 
            height: "auto", 
            maxWidth: "100%", 
            maxHeight: "300px"  // Set a max height to prevent over-scaling
          }}
        >
          <defs>
            <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: "#7f8c8d", stopOpacity: 1 }} />
            </radialGradient>
            <radialGradient id="craterGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: "#bdc3c7", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#7f8c8d", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#2c3e50", stopOpacity: 1 }} />
            </radialGradient>
          </defs>

          <path d="M0,250 Q600,50 1200,250 L1200,300 L0,300 Z" fill="url(#moonGradient)"></path>

          {/* Craters */}
          <ellipse cx="19.2%" cy="70%" rx="2.5%" ry="5%" fill="url(#craterGradient)" />
          <ellipse cx="29.2%" cy="63.3%" rx="2.1%" ry="4%" fill="url(#craterGradient)" />
          <ellipse cx="47.5%" cy="63.3%" rx="3.3%" ry="6.6%" fill="url(#craterGradient)" />
          <ellipse cx="50%" cy="76.6%" rx="1.66%" ry="3.33%" fill="url(#craterGradient)" />
          <ellipse cx="72.5%" cy="70%" rx="2.1%" ry="4%" fill="url(#craterGradient)" />
          <ellipse cx="38.3%" cy="56.6%" rx="1.66%" ry="3.33%" fill="url(#craterGradient)" />
          <ellipse cx="83.3%" cy="80%" rx="1.25%" ry="2.5%" fill="url(#craterGradient)" />
          <ellipse cx="25%" cy="76.6%" rx="1.25%" ry="2.5%" fill="url(#craterGradient)" />
          <ellipse cx="66.6%" cy="60%" rx="0.83%" ry="1.66%" fill="url(#craterGradient)" />
          <ellipse cx="79.1%" cy="70%" rx="1.66%" ry="3.33%" fill="url(#craterGradient)" />
          <ellipse cx="41.6%" cy="86.6%" rx="2.9%" ry="5.6%" fill="url(#craterGradient)" />
          <ellipse cx="54.1%" cy="66.6%" rx="1%" ry="2%" fill="url(#craterGradient)" />
        </svg>
      ) : (
        // SVG for screens smaller than 1440px
        <svg viewBox="0 0 1200 300" style={{ position: "absolute", bottom: 0 }}>
          <defs>
            <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: "#7f8c8d", stopOpacity: 1 }} />
            </radialGradient>
            <radialGradient id="craterGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: "#bdc3c7", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#7f8c8d", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#2c3e50", stopOpacity: 1 }} />
            </radialGradient>
          </defs>

          <path d="M0,250 Q600,50 1200,250 L1200,300 L0,300 Z" fill="url(#moonGradient)"></path>

          <ellipse cx="230" cy="210" rx="30" ry="15" fill="url(#craterGradient)" />
          <ellipse cx="350" cy="190" rx="25" ry="12" fill="url(#craterGradient)" />
          <ellipse cx="570" cy="190" rx="40" ry="20" fill="url(#craterGradient)" />
          <ellipse cx="600" cy="230" rx="20" ry="10" fill="url(#craterGradient)" />
          <ellipse cx="870" cy="210" rx="25" ry="12" fill="url(#craterGradient)" />
          <ellipse cx="460" cy="170" rx="20" ry="10" fill="url(#craterGradient)" />
          <ellipse cx="1000" cy="240" rx="15" ry="8" fill="url(#craterGradient)" />
          <ellipse cx="300" cy="230" rx="15" ry="8" fill="url(#craterGradient)" />
          <ellipse cx="800" cy="180" rx="10" ry="5" fill="url(#craterGradient)" />
          <ellipse cx="950" cy="210" rx="20" ry="10" fill="url(#craterGradient)" />
          <ellipse cx="500" cy="260" rx="35" ry="17" fill="url(#craterGradient)" />
          <ellipse cx="650" cy="200" rx="12" ry="6" fill="url(#craterGradient)" />
        </svg>
      )}
      <Cake/>
    </>
  );
}

export default Land;
