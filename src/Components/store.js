import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./Favorite/Favorite";


const store = configureStore({
    reducer: {
        favourites: favSlice.reducer,
    }
})

export default store; 