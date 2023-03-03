import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      state.items.push({ quantity: 1, ...payload });
    },
    deleteProduct(state, { payload }) {
      const productIdx = state.items.findIndex(
        product => product.id === payload
      );
      state.items.splice(productIdx, 1);
    },
    incrementQuantity(state, { payload }) {
      const productIdx = state.items.findIndex(
        product => product.id === payload
      );
      state.items[productIdx].quantity += 1;
    },
    decrementQuantity(state, { payload }) {
      const productIdx = state.items.findIndex(
        product => product.id === payload
      );
      if (state.items[productIdx].quantity > 1) {
        state.items[productIdx].quantity -= 1;
      }
    },
    cleanCart(state) {
      state.items = [];
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
