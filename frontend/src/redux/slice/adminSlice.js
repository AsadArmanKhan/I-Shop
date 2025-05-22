import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    data: null,

}
export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin(state, action) {
            console.log(action,"admin information");
        }
    }
})
// Action creators are generated for each case reducer function
export const { setAdmin, } = adminSlice.actions

export default adminSlice.reducer