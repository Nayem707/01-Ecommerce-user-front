import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (thunkAPI) => {
    try {
      const res = await axios.get(baseURL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.res.data);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    bulder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
