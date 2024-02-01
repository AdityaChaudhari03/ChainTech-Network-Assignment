// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    password: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    }
  },
});

export const { setUser, updateProfile } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
