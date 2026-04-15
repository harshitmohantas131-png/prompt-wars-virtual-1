import React from 'react';
import { venueZones as zones } from '../data/mockData';

const VenueMap = () => {

  return (
    <div className="card">
      <h3 className="card-title">🗺️ Venue Zone Overview</h3>
      <div className="status-grid">
        {zones.map((zone) => (
          <div key={zone.id} className="status-item">
            <div className="status-label">{zone.name}</div>
            <div className={`status-value ${zone.colorClass}`}>{zone.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueMap;
