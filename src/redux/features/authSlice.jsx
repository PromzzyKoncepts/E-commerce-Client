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


export const signin = createAsyncThunk('auth/login', async (body, { dispatch }) => {
    try {
        const res = await axios.post(`${authUrl}/users/login`, body);

        if (res.data.success === true) {
            const decodedToken = jwt_decode(res.data.message);
            const token = res.data.message;
            dispatch(authSlice.actions.setAuthToken(token));
            dispatch(authSlice.actions.setAuthUser(decodedToken));
            return res.data;
        } else {
            throw new Error("Authentication failed");
        }
    } catch (error) {
        dispatch(authSlice.actions.setAuthError(error.message || "Authentication failed"));
        return null;
    }
});

const initialState = {
    status: 'idle',
    isLoggedIn: false,
    user: {
        email: '',
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        phone_number: '',
    },
    error: null,
    authToken: localStorage.getItem("authToken") || null,
    authUser: null,
   
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload;
        },
        clearAuthError: (state) => {
            state.error = null;
        },

        signOut: (state) => {
            state.authToken = null;
            state.authUser = null;
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
                state.isLoggedIn = true;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(signin.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.status = 'succeess';
            })
            .addCase(signin.rejected, (state) => {
                state.status = 'failed';
            });           
    },
});

export const { signOut, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
