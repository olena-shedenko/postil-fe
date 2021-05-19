import React from 'react';
import './App.scss';
import Slider from './components/Slider/Slider';
import NewIn from './components/NewIn/NewIn';
import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <NewIn />
      <Popular />
      <Footer />;
    </div>
  );
}

export default App;