
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const authUrl = 'https://aphia-dev.onrender.com/api';

export const signup = createAsyncThunk('auth/signup', async (body) => {
    try {
        const res = await axios.post(`${authUrl}/users/register`, body);
        return res.data;
    } catch (error) {
        throw error;
    }
});

export const signin = createAsyncThunk('auth/signin', async (body) => {
    try {
        const res = await axios.post(`${authUrl}/users/login`, body);

        if (res.data.success === true) {
            const decodedToken = jwt_decode(res.data.message);
            const token = res.data.message;

            return { token, user: decodedToken };
        } else {
            throw new Error("Authentication failed");
        }
    } catch (error) {
        throw error;
    }
});

const initialState = {
    status: 'idle',
    user: null,
    error: null,
    authToken: null,
    previousLocation: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPreviousLocation: (state, action) => {
            state.previousLocation = action.payload;
          },

        clearPreviousLocation: (state) => {
            state.previousLocation = null;
          },

        clearAuthError: (state) => {
            state.error = null;
        },
        signOut: (state) => {
            state.authToken = null;
            state.user = null;
            localStorage.removeItem("authToken");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
                
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(signin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.status = 'success';
                state.authToken = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(signin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { signOut, clearAuthError, setPreviousLocation, clearPreviousLocation } = authSlice.actions;

export default authSlice.reducer;
