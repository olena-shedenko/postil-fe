import React from 'react';
import Slider from '../../components/Slider/Slider';
import NewIn from '../../components/NewIn/NewIn';
import Popular from '../../components/Popular/Popular';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function Main() {
  return (
    <>
      <Navbar />
      <Slider />
      <NewIn />
      <Popular />
      <Footer />
    </>
  );
}
