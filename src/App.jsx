import { useEffect } from 'react';
import Layout from './layout/Layout';
import { getCartItems } from './features/Cart/cartURL';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/Cart/CartSlice';

function App() {
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
