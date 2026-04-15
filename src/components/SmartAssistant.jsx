import React, { useState } from 'react';

const SmartAssistant = ({ onGetRecommendation }) => {
  const [location, setLocation] = useState('Gate 1');
  const [need, setNeed] = useState('Entry');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetRecommendation({ location, need });
  };

  return (
    <div className="card">
      <h3 className="card-title">🤖 Smart Assistant</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="Gate 1">Gate 1</option>
            <option value="Gate 2">Gate 2</option>
            <option value="Food Court">Food Court</option>
            <option value="Seating Block A">Seating Block A</option>
            <option value="Seating Block B">Seating Block B</option>
          </select>
        </div>
        <div className="form-group">
          <label>What do you need?</label>
          <select value={need} onChange={(e) => setNeed(e.target.value)}>
            <option value="Entry">Entry / Fast Track</option>
            <option value="Food">Food / Drinks</option>
            <option value="Restroom">Restroom</option>
            <option value="Exit">Exit Route</option>
          </select>
        </div>
        <button type="submit" className="btn">Get Recommendation</button>
      </form>
    </div>
  );
};

export default SmartAssistant;
