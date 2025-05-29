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
            // return console.log(payload.token);
            localStorage.setItem("admin", JSON.stringify(payload.admin));
            localStorage.setItem("token", state.token)
            localStorage.setItem("adminTimeStamp", new Date().getTime());
            // console.log(state.token);
        },
        logout(state) {
            state.data = null;
            state.token = null;

            localStorage.removeItem("admin")
            localStorage.removeItem("token");
            localStorage.removeItem("adminTimeStamp")
        },
        // lsAdmin(state) {
        //     const storedAdmin = localStorage.getItem("admin")
        //     const storedToken = localStorage.getItem("token");
        //     console.log(storedAdmin)
        //     if (storedAdmin && storedToken) {
        //         state.data = JSON.parse(storedAdmin);
        //         // console.log(payload.ad);
        //         state.token = storedToken;
        //     }
        // }

    },
})

// Action creators are generated for each case reducer function
export const { setAdmin, lsAdmin, logout } = adminSlice.actions

export default adminSlice.reducer
