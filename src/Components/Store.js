import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./TodoSlice";

const store= configureStore ({
    reducer:{
        List:TodoReducer
    }

});

export default store;