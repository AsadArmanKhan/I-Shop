import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    data: storedUser?.user || null,
    userToken: storedUser?.userToken || null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.data = payload.user;
            state.userToken = payload.userToken;


            localStorage.setItem("user", JSON.stringify({
                user: payload.user,
                userToken: payload.userToken
            }));
            localStorage.setItem("adminTimeStamp", new Date().getTime());
        },

        lsUser(state) {
            const stored = JSON.parse(localStorage.getItem("user"));
            if (stored) {
                state.data = stored.user;
                state.userToken = stored.userToken;
            }
        },

        userLogout(state) {
            state.data = null;
            state.userToken = null;
            localStorage.removeItem("user");
            localStorage.removeItem("adminTimeStamp");
        }
    }
});

export const { setUser, lsUser, userLogout } = userSlice.actions;
export default userSlice.reducer;
