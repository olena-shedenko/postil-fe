import React from 'react';
import Slider from '../../components/Slider/Slider';
import NewIn from '../../components/NewIn/NewIn';
import Popular from '../../components/Popular/Popular';
import Footer from '../../components/Footer/Footer'

export default function Main() {
  return (
    <div>
      <Slider />
      <NewIn />
      <Popular />
      <Footer/>
    </div>
  );
}
