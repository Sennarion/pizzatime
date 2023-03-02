import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.items = payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
