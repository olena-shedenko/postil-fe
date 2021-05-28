import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getItems } from './store/operations';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />;
    </div>
  );
}

export default App;
