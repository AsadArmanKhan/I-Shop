import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    userToken: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.data = payload.user;
            state.userToken = payload.userToken;
            // return console.log(payload.token);
            localStorage.setItem("user", JSON.stringify(payload.admin));
            localStorage.setItem("token", state)
            localStorage.setItem("adminTimeStamp", new Date().getTime());
            // console.log(state.token);
        },
        lsUser(state) {
            const user = localStorage.getItem("user")


            if (user) {
                state.data = JSON.parse(user.data);
                // console.log(payload.ad);
                state.userToken = user.userToken;
            }
        },
        userLogout(state) {
            state.data = null;
            state.token = null;

            localStorage.removeItem("user")
            // localStorage.removeItem("userToken");
            // localStorage.removeItem("adminTimeStamp")
        },

    },
})

// Action creators are generated for each case reducer function
export const { setUser, lsUser, userLogout } = userSlice.actions

export default userSlice.reducer
