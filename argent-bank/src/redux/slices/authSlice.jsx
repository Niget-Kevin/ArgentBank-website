import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userToken: null,
        error: null,
        isAuthenticated: false,
    },
    reducers: {
        login: (state, action) => {  
            state.userToken = action.payload.token; // Correction : utilisez state.userToken
            state.isAuthenticated = true;
            state.error = null;
        },
        logout: (state) => {
            state.userToken = null;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
});

export const { login, logout } = authSlice.actions; // Retirez les actions inutiles
export default authSlice.reducer;
