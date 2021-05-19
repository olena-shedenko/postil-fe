import React from 'react';
// import AccountModal from './components/AccountModal/AccountModal';
import './App.scss';
import Slider from './components/Slider/Slider';
import NewIn from './components/NewIn/NewIn';
import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Slider />
      <NewIn />
      <Popular />
      <Footer />;
    </div>
  );
}

export default App;
