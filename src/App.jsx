import React from 'react';
import './App.scss';
import Slider from './components/Slider/Slider';
import NewIn from './components/NewIn/NewIn';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div className="App">
      <Slider />
      <NewIn />
      <Popular />
    </div>
  );
}

export default App;
