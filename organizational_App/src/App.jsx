import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Habits from './components/Habits';
import MoodHealth from './components/MoodHealth';
import heroImage from './assets/hero.png';

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <img src={heroImage} alt="Daily Life Organizer Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Daily Life Organizer</h1>
          <p>Your peaceful, purple productivity space.</p>
        </div>
      </header>
      <main className="main-content">
        <Tasks />
        <Habits />
        <MoodHealth />
      </main>
    </div>
  );
}

export default App;
