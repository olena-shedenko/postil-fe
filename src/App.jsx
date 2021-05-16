import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
// import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import getItems from './store/items/operations';
import AppRoutes from './routes/AppRoutes';

// import Slider from './components/Slider/Slider';
// import NewIn from './components/NewIn/NewIn';
// import Popular from './components/Popular/Popular';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <Slider />
      <NewIn />
      <Popular /> */}
      <AppRoutes />
      {/* <ShoppingBag /> */}
    </div>
  );
}

export default App;
