import React from 'react';
import Slider from '../../components/Slider/Slider';
import NewIn from '../../components/NewIn/NewIn';
import Popular from '../../components/Popular/Popular';

const Home = () => {
  return (
    <div>
      <Slider />
      <NewIn />
      <Popular />
    </div>
  );
};

export default Home;
