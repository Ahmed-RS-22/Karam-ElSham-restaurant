import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const savedCart = localStorage.getItem("cart");
const initialState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const found = state.cart.find((c) => c.id === item.id);
      if (found) {
        found.qty += 1;
        toast.success(`تمت زيادة الكمية من ${item.name} ⬆️`);
      } else {
        state.cart.push({ id: item.id || item.name, ...item, qty: 1 });
        toast.success(`${item.name} تمت إضافته إلى السلة ✅`);
      }
      saveToLocalStorage(state.cart);
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.cart.find((c) => c.id === id);
      state.cart = state.cart.filter((c) => c.id !== id);
      saveToLocalStorage(state.cart);
      if (item) {
        toast.error(`${item.name} تم حذفه من السلة ❌`);
      }
    },
    increaseQty(state, action) {
      const item = state.cart.find((c) => c.id === action.payload);
      if (item) {
        item.qty += 1;
        toast.success(`تمت زيادة الكمية من ${item.name} ⬆️`);
      }
      saveToLocalStorage(state.cart);
    },
    decreaseQty(state, action) {
      const item = state.cart.find((c) => c.id === action.payload);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
          toast.error(`تم إنقاص الكمية من ${item.name} ⬇️`, { icon: "⚠️" });
        } else {
          // لو الكمية 1 وانقصنا → نحذف المنتج
          state.cart = state.cart.filter((c) => c.id !== action.payload);
          toast.error(` تم حذفه من السلة ❌ ${item.name}`);
        }
      }
      saveToLocalStorage(state.cart);
    },
    clearCart(state) {
      state.cart = [];
      saveToLocalStorage(state.cart);
      toast.error("تم تفريغ السلة 🗑️");
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
