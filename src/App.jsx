import React, { useState } from 'react';
import Home from './components/Home';
import SmartAssistant from './components/SmartAssistant';
import Recommendation from './components/Recommendation';
import LiveStatus from './components/LiveStatus';
import Alerts from './components/Alerts';
import VenueMap from './components/VenueMap';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('home'); // 'home', 'assistant', 'recommendation'
  const [recommendationData, setRecommendationData] = useState(null);

  const startAssistant = () => setView('assistant');
  
  const getRecommendation = (data) => {
    setRecommendationData(data);
    setView('recommendation');
  };

  const resetAssistant = () => {
    setRecommendationData(null);
    setView('assistant');
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>VenueFlow AI</h1>
        <p>Your intelligent stadium companion.</p>
      </div>
      
      <Alerts />

      {view === 'home' && <Home onStart={startAssistant} />}
      
      {view === 'assistant' && (
        <SmartAssistant onGetRecommendation={getRecommendation} />
      )}
      
      {view === 'recommendation' && recommendationData && (
        <Recommendation 
          location={recommendationData.location} 
          need={recommendationData.need} 
          onReset={resetAssistant} 
        />
      )}

      <LiveStatus />
      <VenueMap />
      <Footer />
    </div>
  );
}

export default App;
