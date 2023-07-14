import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { stat } from "fs";

interface BasketType {
  products: any;
  totalPrice: number;
  price: number;
}

const initialState: BasketType = {
  products: [],
  totalPrice: 0,
  price: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketType, action: PayloadAction<any>) => {
      const checkCart = state.products.find((item: any) => {
        if (item._id === action.payload._id) {
          return item;
        }
      });

      console.log(checkCart);

      if (checkCart) {
        const updateCartProducts = state.products.map((item: any) => {
          console.log(item.quantity);

          if (item._id === action.payload._id) {
            return {
              ...item,
              quantity: (item.quantity as number) + 1,
              priceOnCart: item.quantity * item.priceOnCart,
            };
          }
        });

        state.totalPrice =
          state.totalPrice + Number(action.payload.priceOnCart);
        state.products = updateCartProducts;
      } else {
        state.products = [...state.products, action.payload];
      }

      // state.products = [...state.products, action.payload];
    },
    removeFromBasket(state: BasketType, action: PayloadAction<any>) {
      const removedProduct = state.products.filter(
        (item: any) => item._id !== action.payload._id
      );

      state.products = removedProduct;
      state.totalPrice = state.totalPrice - Number(action.payload.priceOnCart);
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
