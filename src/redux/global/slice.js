import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false, errorStatus: null };

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    setErrorStatus(state, { payload }) {
      state.errorStatus = payload;
    },
  },
});

export const { setIsLoading, setErrorStatus } = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
