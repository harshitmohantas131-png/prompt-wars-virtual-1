import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
        Smart stadium navigation to help you avoid crowds and find what you need faster.
      </p>
      <button className="btn" onClick={onStart}>
        Start Assistant
      </button>
    </div>
  );
};

export default Home;
