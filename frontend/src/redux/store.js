import { configureStore } from '@reduxjs/toolkit'
import { adminSlice } from './slice/adminSlice';
import  cartSlice  from './slice/cartSlice';
import  userSlice  from './slice/userSlice';

const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        cart:cartSlice,
        user:userSlice,
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