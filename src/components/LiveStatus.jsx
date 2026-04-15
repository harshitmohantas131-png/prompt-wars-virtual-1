import React from 'react';
import { liveVenueStatus } from '../data/mockData';

const LiveStatus = () => {
  return (
    <div className="card">
      <h3 className="card-title">📊 Live Venue Status</h3>
      <div className="status-grid">
        {liveVenueStatus.map((status) => (
          <div key={status.id} className="status-item">
            <div className="status-label">{status.label}</div>
            <div className={`status-value ${status.colorClass}`}>{status.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveStatus;
