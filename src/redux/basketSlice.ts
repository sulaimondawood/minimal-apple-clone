import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { stat } from "fs";

interface BasketType {
  products: any;
  totalPrice: number;
}

const initialState: BasketType = {
  products: [],
  totalPrice: 0,
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

      if (checkCart) {
        const updatedProducts = state.products.map((item: any) => {
          if (item._id === action.payload._id) {
            const updatedQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: updatedQuantity,
              priceOnCart: updatedQuantity * parseInt(item.price),
            };
          }
          return item;
        });

        state.products = updatedProducts;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          priceOnCart:
            parseInt(action.payload.price) * parseInt(action.payload.quantity),
        };
        state.products = [...state.products, newItem];
      }
      const totalPrice = state.products.reduce(
        (acc: number, item: any) => acc + item.priceOnCart,
        0
      );
      state.totalPrice = totalPrice;

      console.log(state.products);
    },
    removeFromBasket(state: BasketType, action: PayloadAction<any>) {
      const removedProduct = state.products.filter(
        (item: any) => item._id !== action.payload._id
      );

      state.products = removedProduct;
      state.totalPrice =
        state.totalPrice - parseInt(action.payload.priceOnCart);
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;
