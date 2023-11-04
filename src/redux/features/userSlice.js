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
    userLogoutStart: (state) => {
      state.isLoading = true;
    },
    userLogoutSuccess: (state) => {
      state.isLoading = false;
      state.user = {};
      state.userDetails = {};
      state.error = null;
    },
    userLogoutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userRegisterRequestStart: (state) => {
      state.isLoading = true;
    },
    userRegisterRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    userRegisterRequestFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userDetailsRequestStart: (state) => {
      state.isLoading = true;
    },
    userDetailsRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
      state.error = null;
    },
    userDetailsRequestFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userProfileUpdateRequestStart: (state) => {
      state.userUpdateProfile.pending = true;
    },
    userProfileUpdateRequestSuccess: (state, action) => {
      state.userUpdateProfile.pending = false;
      state.userUpdateProfile.updatedUser = action.payload;
      state.userUpdateProfile.updateError = null;
    },
    userProfileUpdateRequestFailure: (state, action) => {
      state.userUpdateProfile.pending = false;
      state.userUpdateProfile.updateError = action.payload;
    },
    userListRequestStart: (state) => {
      state.userList.loading = true;
    },
    userListRequestSuccess: (state, action) => {
      state.userList.users = action.payload;
      state.userList.loading = false;
      state.userList.error = null;
    },
    userListRequestFailure: (state, action) => {
      state.userList.loading = false;
      state.userList.error = action.payload;
    },
    userListReset: (state) => {
      state.userList.users = [];
    },
    userDeleteStart: (state) => {
      state.userDelete.loading = true;
    },
    userDeleteSuccess: (state) => {
      state.userDelete.success = true;
      state.userDelete.loading = false;
      state.userDelete.error = null;
    },
    userDeleteFailure: (state, action) => {
      state.userDelete.loading = false;
      state.userDelete.error = action.payload;
    },
    userUpdateStart: (state) => {
      state.userUpdate.loading = true;
    },
    userUpdateSuccess: (state, action) => {
      state.userUpdate.success = true;
      state.userUpdate.loading = false;
      state.userUpdate.error = null;
      state.user = action.payload; // Update user after successful update
    },
    userUpdateFailure: (state, action) => {
      state.userUpdate.loading = false;
      state.userUpdate.error = action.payload;
    },
    userUpdateReset: (state) => {
      state.userUpdate.user = {};
    },
  },
});

export const {
  userLoginRequestStart,
  userLoginSuccess,
  userLoginRequestFailure,
  userLogoutStart,
  userLogoutSuccess,
  userLogoutFailure,
  userRegisterRequestStart,
  userRegisterRequestSuccess,
  userRegisterRequestFailure,
  userDetailsRequestStart,
  userDetailsRequestSuccess,
  userDetailsRequestFailure,
  userProfileUpdateRequestStart,
  userProfileUpdateRequestSuccess,
  userProfileUpdateRequestFailure,
  userListRequestStart,
  userListRequestSuccess,
  userListRequestFailure,
  userListReset,
  userDeleteStart,
  userDeleteSuccess,
  userDeleteFailure,
  userUpdateStart,
  userUpdateSuccess,
  userUpdateFailure,
  userUpdateReset,
} = userSlice.actions;

export default userSlice.reducer;
