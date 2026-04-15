import React, { useState, useEffect } from 'react';
import { getRecommendationText } from '../data/mockData';

const Recommendation = ({ location, need, onReset }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start loading whenever component mounts or inputs change
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location, need]);

  return (
    <div className="card" style={{ border: '1px solid var(--success)' }}>
      <h3 className="card-title">💡 Recommended Action</h3>
      <div style={{ backgroundColor: 'rgba(0, 255, 170, 0.1)', padding: '15px', borderRadius: '8px', marginBottom: '15px', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
        {isLoading ? (
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.5', opacity: 0.8, display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2rem' }}>⏳</span> Analyzing venue conditions...
          </p>
        ) : (
          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.5' }}>
            {getRecommendationText(need, location)}
          </p>
        )}
      </div>
      <button className="btn btn-secondary" onClick={onReset} disabled={isLoading}>
        Ask Something Else
      </button>
    </div>
  );
};

export default Recommendation;
