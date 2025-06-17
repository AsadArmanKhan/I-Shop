import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    final_total: 0,
    original_total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, current) {
            const { productId, orignalPrice, finalPrice } = current.payload;
            const existingItem = state.items.find(item => item.productId === productId);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.items.push({
                    productId,
                    qty: 1
                });
            }
            state.final_total += Number(finalPrice);
            state.original_total += Number(orignalPrice);

            localStorage.setItem("cart", JSON.stringify(state));

        },
        lsToCart(state) {
            const lsCart = JSON.parse(localStorage.getItem("cart"));
            if (lsCart) {
                state.items = lsCart.items || [];
                state.final_total = lsCart.final_total || 0;
                state.original_total = lsCart.original_total || 0;
            }
        },
        qtyHandle(state, current) {
            const { productId, type, finalPrice, orignalPrice } = current.payload;
            const existingItem = state.items.find(item => item.productId === productId);
            if (existingItem) {
                if (type === "inc") {
                    existingItem.qty += 1;
                    state.final_total += Number(finalPrice);
                    state.original_total += Number(orignalPrice);
                } else if (type === "dec" && existingItem.qty > 1) {
                    existingItem.qty -= 1;
                    state.final_total -= Number(finalPrice);
                    state.original_total -= Number(orignalPrice);
                }
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        emtyCart(state) {
            state.items = [];
            state.final_total = 0;
            state.original_total = 0;
            localStorage.removeItem("cart")
        }

    }
})

// Action creators are generated for each case reducer function
export const { addItem, lsToCart, qtyHandle, emtyCart } = cartSlice.actions

export default cartSlice.reducer