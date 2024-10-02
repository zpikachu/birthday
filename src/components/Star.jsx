// src/components/Stars.js
import React, { useEffect } from 'react';
import './star.css'; // Import the CSS for the stars

const Stars = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.stars-container');

    // Function to create stars with glow and twinkle effect
    function createStars() {
      for (let i = 0; i < 150; i++) { // Adjust the number of stars as needed
        let star = document.createElement('div');
        star.classList.add('star');

        // Random starting position
        star.style.setProperty('--start-pos', Math.random());

        // Random size for each star
        const size = Math.random() * 6 + 4; // Size between 4px to 10px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random color for each star
        const colors = ['#ffcc00', '#ff007f', '#00ffcc', '#ff6600', '#03bcf4'];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random delay for each star
        const delay = Math.random() * 3; // Random delay between 0 to 3 seconds
        star.style.animationDelay = `${delay}s`;

        // Set the animation duration randomly
        star.style.animationDuration = `${Math.random() * 2 + 3}s`; // Between 3 to 5 seconds
        star.style.bottom = `${Math.random() * 10 - 10}px`; // Ensure stars start off-screen
        starContainer.appendChild(star);
      }
    }

    createStars();
  }, []);

  return <div className="stars-container"></div>;
};

export default Stars;
