import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [],
    finalTotal: 0,
    orignalTotal: 0,
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem(state, current) {
            const { productId, finalPrice, orignalPrice } = current.payload;
            const existingItem = state.item.find(item => item.productId === productId);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.item.push({ productId, qty: 1 });
            }

            state.finalTotal += Number(finalPrice);
            state.orignalTotal += Number(orignalPrice);

            localStorage.setItem('Cart', JSON.stringify(state));
        },

        lsToCart(state) {
            const lsCart = JSON.parse(localStorage.getItem('Cart'));
            if (lsCart) {
                state.item = lsCart.item || [];
                state.finalTotal = lsCart.finalTotal || 0;
                state.orignalTotal = lsCart.orignalTotal || 0;
            }
        },

        qtyHandler(state, current) {
            const { productId, type, finalPrice, orignalPrice } = current.payload;
            const existingItem = state.item.find(item => item.productId === productId);
            if (existingItem) {

                if (type === "inc") {
                    existingItem.qty += 1;
                    state.finalTotal += Number(finalPrice);
                    state.orignalTotal += Number(orignalPrice);
                } else if (type === "dec" && existingItem.qty > 1) {
                    existingItem.qty -= 1;
                    state.finalTotal -= Number(finalPrice);
                    state.orignalTotal -= Number(orignalPrice);
                }
            }
            localStorage.setItem('Cart', JSON.stringify(state));

        },
        // userLogout(state) {
        //     state.item = [];
        //     state.finalTotal = 0;
        //     state.orignalTotal = 0;
        //     localStorage.removeItem("cart")
        // }

    },
})

export const { lsToCart, addItem, qtyHandler } = cartSlice.actions

export default cartSlice.reducer
