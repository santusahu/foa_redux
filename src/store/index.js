import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "../constants";


const defaultCartState = {
  items: [],
  totalPrice: 0,
};

console.log(ACTION_TYPE);
const cartSlice = createSlice({
  name: "CartItems",
  initialState: defaultCartState,
  reducers: {
    addToCart(state, action) {
      let updateItems;
      let updateTotalPrice;

      const exstingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload.item.id;
      });

      let exstingCartItem;

      if (exstingCartItemIndex >= 0) {
        exstingCartItem = state.items[exstingCartItemIndex];
      }

      updateTotalPrice =
        state.totalPrice +
        action.payload.item.price * action.payload.item.amount;
      updateItems = [...state.items];

      if (exstingCartItem) {
        const updatedItemIs = {
          ...exstingCartItem,
          amount: exstingCartItem.amount + action.payload.item.amount,
        };
        updateItems[exstingCartItemIndex] = updatedItemIs;
        // console.log(updatedItemIs);
      } else {
        updateItems = state.items.concat(action.payload.item);
      }

      return {
        items: updateItems,
        totalPrice: updateTotalPrice,
      };
    },

    removeFromCart(state, action) {
      const payloadAcction = action.payload;
      const { id, type } = payloadAcction;

      const exstingCartItemIndex = state.items.findIndex((item) => {
        return item.id === payloadAcction.id;
      });

      let exstingCartItem;
      let updatedItemIs;
      let updateItems;
      let updateTotalPrice;

      if (exstingCartItemIndex >= 0) {
        exstingCartItem = state.items[exstingCartItemIndex];
      }

      updateItems = [...state.items];
      if (type === "add") {
        updatedItemIs = {
          ...exstingCartItem,
          amount: exstingCartItem.amount + 1,
        };
        updateItems[exstingCartItemIndex] = updatedItemIs;
        updateTotalPrice = state.totalPrice + exstingCartItem.price;

        return {
          items: updateItems,
          totalPrice: updateTotalPrice,
        };
      }

      if (type === "remove") {
        
        console.log(exstingCartItem.amount);
        if (exstingCartItem.amount === 1) {
          updateItems = state.items.filter((item) => {
            console.log(item.id, { id });
            return item.id !== id;
          });
        }
        
        console.log(updateItems);
        console.log(exstingCartItemIndex);
        if (exstingCartItem.amount > 1) {
          updatedItemIs = {
            ...exstingCartItem,
            amount: exstingCartItem.amount - 1,
          };
          updateItems[exstingCartItemIndex] = updatedItemIs;
        }
        updateTotalPrice = state.totalPrice - exstingCartItem.price;
        if (updateItems.length === 0){
          updateTotalPrice = 0
        }
        return {
          items: updateItems,
          totalPrice: updateTotalPrice,
        };
      }

      return {
        ...state
      }
      
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartAction = cartSlice.actions;
export default store;
