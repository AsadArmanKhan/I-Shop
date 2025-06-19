import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    token: null
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin(state, { payload }) {
            state.data = payload.admin;
            state.token = payload.token;
            localStorage.setItem("admin", JSON.stringify(payload.admin));
            localStorage.setItem("token", state.token)
            localStorage.setItem("adminTimeStamp", new Date().getTime());
        },
           lsAdmin(state) {
            const adminData = JSON.parse(localStorage.getItem("admin"));
            const token = localStorage.getItem("token");

            if (adminData && token) {
                state.data = adminData;
                state.token = token;
            } else {
                state.data = null;
                state.token = null;
            }
        },
        logout(state) {
            state.data = null;
            state.token = null;

            localStorage.removeItem("admin")
            localStorage.removeItem("token");
            localStorage.removeItem("adminTimeStamp")
        },

    },
})

// Action creators are generated for each case reducer function
export const {lsAdmin, setAdmin, logout } = adminSlice.actions

export default adminSlice.reducer