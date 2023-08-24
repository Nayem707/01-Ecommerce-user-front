import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk to fetch RTK data
export const fetchProductData = createAsyncThunk(
  'ProductsData/fetchData',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsDataSlice.reducer;
