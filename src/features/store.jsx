import { configureStore } from '@reduxjs/toolkit';

import CartReducer from './Cart/CartSlice';
import ProductsReducer from './Products/ProductsSlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: ProductsReducer,
  },
});

export default store;
