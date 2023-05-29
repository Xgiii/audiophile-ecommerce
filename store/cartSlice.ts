import { CartItem } from '@/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
  totalQty: number;
}

const initialState: CartState = {
  items: [],
  totalQty: 0,
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
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => id === item.id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQty = state.totalQty - itemToRemove?.quantity!;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
