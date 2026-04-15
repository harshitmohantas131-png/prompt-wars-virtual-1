import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      paddingTop: '30px',
      paddingBottom: '10px',
      color: 'var(--text-secondary)',
      fontSize: '0.85rem',
      lineHeight: '1.6',
      opacity: 0.7,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
      <div style={{ margin: '0' }}>Built for large-scale sporting venue crowd assistance</div>
      <div style={{ margin: '0' }}>Designed with React and mock real-time decision logic</div>
      <div style={{ margin: '0' }}>Prepared for future Firebase and Google Maps integration</div>
    </footer>
  );
};

export default Footer;
