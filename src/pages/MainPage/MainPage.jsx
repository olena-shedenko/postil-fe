import React from 'react';
import Slider from '../../components/Slider/Slider';
import NewIn from '../../components/NewIn/NewIn';
import Popular from '../../components/Popular/Popular';

export default function Main() {
  return (
    <div>
      <Slider />
      <NewIn />
      <Popular />
    </div>
  );
}
