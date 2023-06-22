import { createSlice } from "@reduxjs/toolkit";

interface BasketType {
  products: any;
}

const initialState: BasketType = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeFromBasket(state, payload) {},
  },
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
