import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  userDetails: {},
  isLoading: false,
  error: null,
  userUpdateProfile: { updatedUser: {}, pending: false, updateError: null },
  userList: { users: [] },
  userDelete: { user: {} },
  userUpdate: { user: {} },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginRequestStart: (state) => {
      state.isLoading = true;
    },
    userLoginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    userLoginRequestFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userLoginRequestStart,
  userLoginSuccess,
  userLoginRequestFailure,
} = userSlice.actions;

export default userSlice.reducer;
