import { useEffect } from 'react';
import Layout from './layout/Layout';
import { getCartItems } from './features/Products/ProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/Cart/CartSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </>
  );
}

export default App;
