import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.card.info.id === action.payload.card.info.id
            );

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            //console.log(current(state));
        },

        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.card.info.id === action.payload.card.info.id
            );

            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.items.splice(itemIndex, 1);
                }
            }

            //console.log(current(state));
        },

        clearItem: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
