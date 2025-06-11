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
export const { setAdmin, logout } = adminSlice.actions

export default adminSlice.reducer
