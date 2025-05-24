import { configureStore } from '@reduxjs/toolkit'
import { adminSlice } from './slice/adminSlice';

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer
    },
})

export default store



// import { configureStore } from '@reduxjs/toolkit'
// import { adminSlice } from './slice/adminSlice';

  
// const store = configureStore({
//     reducer: {
//         admin: adminSlice.reducer
//     },
// })
// export default store;