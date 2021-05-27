import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getItems } from './store/operations';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;