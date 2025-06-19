import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [],
    finalTotal: 0,
    originalTotal: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, current) {
            const { productId, finalPrice, originalPrice } = current.payload;
            const existingItem = state.item.find(item => item.productId === productId);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.item.push({ productId, qty: 1 });
            }

            state.finalTotal += Number(finalPrice);
            state.originalTotal += Number(originalPrice);

            localStorage.setItem('cart', JSON.stringify(state));
        },

        lsToCart(state) {
            const lsCart = JSON.parse(localStorage.getItem('cart'));
            if (lsCart) {
                state.item = lsCart.item || [];
                state.finalTotal = lsCart.finalTotal || 0;
                state.originalTotal = lsCart.originalTotal || 0;
            }
        },

        qtyHandler(state, current) {
            const { productId, type, finalPrice, originalPrice } = current.payload;
            const existingItem = state.item.find(item => item.productId === productId);
            if (existingItem) {

                if (type === "inc") {
                    existingItem.qty += 1;
                    state.finalTotal += Number(finalPrice);
                    state.originalTotal += Number(originalPrice);
                } else if (type === "dec" && existingItem.qty > 1) {
                    existingItem.qty -= 1;
                    state.finalTotal -= Number(finalPrice);
                    state.originalTotal -= Number(originalPrice);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));

        },
        emptycart(state){
         state.item =[];
         state.finalTotal=0;
         state.originalTotal=0;
         localStorage.removeItem("cart")
        },
        setCartFromDb(state, action) {
            const dbCart = action.payload; // array of cart items from backend
            state.item = [];
            state.finalTotal = 0;
            state.originalTotal = 0;

            dbCart.forEach(item => {
                state.item.push({
                    productId: item.product_id._id, // from populate
                    qty: item.qty
                });

                state.finalTotal += Number(item.product_id.finalPrice) * item.qty;
                state.originalTotal += Number(item.product_id.originalPrice) * item.qty;
            });

            localStorage.setItem('cart', JSON.stringify(state));
        }


    },
})

export const { lsToCart, addItem, qtyHandler , emptycart,setCartFromDb} = cartSlice.actions

export default cartSlice.reducer

// addItem(state, current) {
//     console.log(current.payload, "payload")
//     const { productId, finalPrice, orignalPrice } = current.payload;
//     const existingItem = state.item.find(item => item.productId === productId);
//     if (existingItem) {
//         existingItem.qty += 1;
//         // state.finalTotal += finalPrice;
//         // state.orignalTotal += orignalPrice;
//     } else {

//         state.item.push(
//             {
//                 productId,
//                 qty: 1,
//             }
//         );
//     }

//     state.finalTotal += finalPrice;
//     state.orignalTotal += orignalPrice;
//     localStorage.setItem('cart', JSON.stringify(state.item))
//     // console.log(current.payload);
// },
// lsToCart(state) {
//     const lsCart = JSON.parse(localStorage.getItem('cart'));
//     if (lsCart) {
//         state.item = lsCart.item || [];
//         state.finalTotal = lsCart.finalTotal || 0;
//         state.orignalTotal = lsCart.orignalTotal || 0;
//     }
// }


// cartSlice.js