import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  finalTotal: 0,
  originalTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { productId, finalPrice, originalPrice } = action.payload;
      const existingItem = state.item.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        // state.item.push({ productId, qty: 1 });
        //This is the new code
        state.item.push({ productId, qty: 1, finalPrice, originalPrice });
      }

      state.finalTotal += Number(finalPrice);
      state.originalTotal += Number(originalPrice);

      localStorage.setItem("cart", JSON.stringify(state));
    },

    qtyHandler(state, action) {
      const { productId, type, finalPrice, originalPrice } = action.payload;
      const existingItem = state.item.find(
        (item) => item.productId === productId
      );
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

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem: (state, action) => {
      const productId = action.payload;
      state.item = state.item.filter((item) => item.productId !== productId);

      let final = 0;
      let original = 0;

      state.item.forEach((item) => {
        const qty = Number(item.qty);
        const fp = Number(item.finalPrice);
        const op = Number(item.originalPrice);

        if (!isNaN(qty) && !isNaN(fp)) final += qty * fp;
        if (!isNaN(qty) && !isNaN(op)) original += qty * op;
      });

      state.finalTotal = final;
      state.originalTotal = original;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    emptycart(state) {
      state.item = [];
      state.finalTotal = 0;
      state.originalTotal = 0;
      localStorage.removeItem("cart");
    },

    lsToCart(state) {
      const lsCart = JSON.parse(localStorage.getItem("cart"));
      if (lsCart) {
        state.item = lsCart.item || [];
        state.finalTotal = lsCart.finalTotal || 0;
        state.originalTotal = lsCart.originalTotal || 0;
      }
    },

    setCartFromDb(state, action) {
      const dbCart = action.payload;
      state.item = [];
      state.finalTotal = 0;
      state.originalTotal = 0;

      dbCart.forEach((item) => {
        // state.item.push({
        //   productId: item.product_id._id,
        //   qty: item.qty,
        // });
        //This is the new code
        state.item.push({
          productId: item.product_id._id,
          qty: item.qty,
          finalPrice: item.product_id.finalPrice,
          originalPrice: item.product_id.originalPrice,
        });

        state.finalTotal += Number(item.product_id.finalPrice) * item.qty;
        state.originalTotal += Number(item.product_id.originalPrice) * item.qty;
      });

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addItem,
  qtyHandler,
  removeItem,
  emptycart,
  lsToCart,
  setCartFromDb,
} = cartSlice.actions;

export default cartSlice.reducer;
