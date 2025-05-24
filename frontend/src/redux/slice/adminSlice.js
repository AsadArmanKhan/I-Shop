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
            localStorage.setItem("adminTimeStamp", new Date().getTime());
            localStorage.setItem("token", state.token)
            console.log(state.token);
        },
        // logout() {
        //     state.data = null;
        //     localStorage.removeItem("admin")
        //     localStorage.removeItem("adminTimeStamp")
        // },
        lsAdmin(state) {
            const admin = localStorage.getItem("admin")
            

            console.log(admin)
            if (admin) {
                state.data = payload.admin;
                state.token = localStorage.getItem("token")  
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { setAdmin, lsAdmin, logout } = adminSlice.actions

export default adminSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'


// const initialState = {

//     data: null,

// }
// export const adminSlice = createSlice({
//     name: 'admin',
//     initialState,
//     reducers: {
//         setAdmin(state, action) {
//             console.log(action,"admin information");
//         }
//     }
// })
// // Action creators are generated for each case reducer function
// export const { setAdmin, } = adminSlice.actions

// export default adminSlice.reducer