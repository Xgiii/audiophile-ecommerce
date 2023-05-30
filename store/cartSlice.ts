import { CartItem } from '@/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import Cookies from 'js-cookie';

interface CartState {
  items: CartItem[];
  totalQty: number;
}

const initialState: CartState = {
  items: Cookies.get('items') ? JSON.parse(Cookies.get('items')!) : [],
  totalQty: Cookies.get('totalQty') ? JSON.parse(Cookies.get('totalQty')!) : 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: CartItem) => item.id === newItem.id
      );
      state.totalQty = state.totalQty + newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          cartImage: newItem.cartImage,
          shortName: newItem.shortName,
        });
        Cookies.set('totalQty', JSON.stringify(state.totalQty));
        Cookies.set('items', JSON.stringify([...state.items]));
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        Cookies.set('totalQty', JSON.stringify(state.totalQty));
        Cookies.set('items', JSON.stringify([...state.items]));
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => id === item.id);
      if (itemToRemove?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQty = state.totalQty - itemToRemove?.quantity!;
        Cookies.set('items', JSON.stringify([...state.items]));
        Cookies.set('totalQty', JSON.stringify(state.totalQty));
      } else {
        itemToRemove!.quantity = itemToRemove!.quantity - 1;
        state.totalQty = state.totalQty - 1;
        Cookies.set('items', JSON.stringify([...state.items]));
        Cookies.set('totalQty', JSON.stringify(state.totalQty));
      }
    },
    removeAll(state) {
      state.items = [];
      state.totalQty = 0;
      Cookies.set('items', JSON.stringify([...state.items]));
      Cookies.set('totalQty', JSON.stringify(state.totalQty));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
