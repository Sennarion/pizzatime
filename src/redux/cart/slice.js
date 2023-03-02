import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

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
        product => product.id === payload.id
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
  },
});

export const {
  addProduct,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
