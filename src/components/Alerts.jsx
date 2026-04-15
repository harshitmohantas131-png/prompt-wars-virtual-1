import React, { useState, useEffect } from 'react';
import { mockAlerts } from '../data/mockData';

const Alerts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const alertInterval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // Wait for fade out, then swap text and fade back in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mockAlerts.length);
        setIsVisible(true);
      }, 500); // 500ms matches the CSS transition time
    }, 4000);

    return () => clearInterval(alertInterval);
  }, []);

  return (
    <div className="alert-banner">
      <div className="alert-icon">⚠️</div>
      <div 
        className="alert-content"
        style={{ 
          opacity: isVisible ? 1 : 0, 
          transition: 'opacity 0.5s ease-in-out' 
        }}
      >
        <p><strong>Heads up!</strong> {mockAlerts[currentIndex]}</p>
      </div>
    </div>
  );
};

export default Alerts;
