import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      state.items.push({ amount: 1, ...payload });
    },
    deleteProduct(state, { payload }) {
      const productIdx = state.items.findIndex(
        product => product.id === payload
      );
      state.items.splice(productIdx, 1);
    },
    increaseAmount(state, { payload }) {
      const productIdx = state.items.findIndex(
        product => product.id === payload
      );
      state.items[productIdx].amount += 1;
    },
    decreaseAmount(state, { payload }) {
      const productIdx = state.items.findIndex(
        product => product.id === payload
      );
      if (state.items[productIdx].amount > 1) {
        state.items[productIdx].amount -= 1;
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
  increaseAmount,
  decreaseAmount,
  cleanCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
