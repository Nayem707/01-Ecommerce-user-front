import { configureStore } from '@reduxjs/toolkit';

import CartReducer from './reduxCart/CartSlice';
import productsReducer from './ProductsData/ProductDataSlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: productsReducer,
  },
});

export default store;
