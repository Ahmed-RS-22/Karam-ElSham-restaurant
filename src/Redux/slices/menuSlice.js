import { createSlice } from "@reduxjs/toolkit";
import { menuData } from "../../Data/menuData";

const initialState = {
  items: menuData, // object: category -> array
  search: "",
  categoryFilter: ""
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
    setMenu(state, action) {
      state.items = action.payload;
    }
  }
});

export const { setSearch, setCategoryFilter, setMenu } = menuSlice.actions;
export default menuSlice.reducer;
