import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getItems, getProductOperation } from './store/operations';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductOperation());
  }, [dispatch]);

  return (
    <div className="App">
      <AppRoutes />
      <Footer />;
    </div>
  );
}

export default App;
