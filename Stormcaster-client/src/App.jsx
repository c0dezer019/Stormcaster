/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from './components/Footer';
import Routes from './config/routes';
import './css/weather-icons.min.css';
import './css/weather-icons-wind.min.css';

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
