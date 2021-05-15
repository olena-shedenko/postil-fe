import React from 'react';
import './App.scss';
import Slider from './components/Slider/Slider';
import NewIn from './components/NewIn/NewIn';
import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';
import BagPopup from './components/BagPopup/BagPopup';

function App() {
  return (
    <div className="App">
      <Slider />
      <NewIn />
      <Popular />
      <Footer />;
      <BagPopup />
    </div>
  );
}

export default App;
