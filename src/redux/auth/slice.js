import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: null, id: null, avatar: null, isLoggedIn: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.id = payload.id;
      state.avatar = payload.avatar;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.avatar = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
