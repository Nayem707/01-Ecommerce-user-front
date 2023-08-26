import { useEffect } from 'react';
import Layout from './layout/Layout';
import { getCartItems } from './features/Cart/cartURL';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
