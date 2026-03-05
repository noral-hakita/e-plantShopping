import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Task: Implement the addItem reducer
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // Task: Implement the removeItem reducer
    removeItem: (state, action) => {
      // Removes an item from the cart based on its name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Task: Implement the updateQuantity reducer
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Task: Export the action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Task: Export the reducer as the default to use in store.js