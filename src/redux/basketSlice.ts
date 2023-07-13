import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    removeFromBasket(state: BasketType, action: PayloadAction) {
      const index = state.products.findIndex((item: any) => {
        item.slug === action.payload;
      });
      const newProducts = [state.products];

      if (index > 0) {
        newProducts.splice(index, 1);
      } else {
        console.log("Product is not in the cart");
      }

      state.products = newProducts;
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
