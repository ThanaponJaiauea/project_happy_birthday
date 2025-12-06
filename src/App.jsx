import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import BirthdayCard from './components/BirthdayCard';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center overflow-hidden font-sans">
      <BackgroundEffects />
      <BirthdayCard />
    </div>
  );
}

export default App;
