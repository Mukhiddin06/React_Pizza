import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../components/HomeProducts";

interface SaveState {
    saved: ProductType[]
}

const initialState: SaveState = {
    saved: []
}

const SavedSlice = createSlice({
    name: "Saved",
    initialState,
    reducers: {
        createSave: (state, action) => {
            const existingItem = state.saved.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.savedCount = (existingItem.savedCount || 0) + 1;
                existingItem.price = existingItem.price + action.payload.price
            } else {
                state.saved.push({ ...action.payload, savedCount: 1 });
            }
        },
        removeSave: () => initialState,
        removeItem: (state, action) => {
            state.saved = state.saved.filter(item => item.id !== action.payload)
        },
        incrementItem: (state, action) => {
            const saveItem = state.saved.find(item => item.id === action.payload.id);
            if (saveItem) {
                saveItem.savedCount += 1;
                saveItem.price = saveItem.price + action.payload.price;
            }
        },
        decrementItem: (state, action) => {
            const saveItem = state.saved.find(item => item.id === action.payload.id);
            if (saveItem) {
                saveItem.savedCount -= 1;
                saveItem.price = saveItem.price - action.payload.price;
                if (saveItem.savedCount <= 0) {
                    state.saved = state.saved.filter(item => item.id !== action.payload.id);
                }
            }
        },
    }
})

export const { createSave, removeSave, removeItem, incrementItem, decrementItem } = SavedSlice.actions
export default SavedSlice.reducer