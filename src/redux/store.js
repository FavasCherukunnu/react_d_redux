import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./color/colorSlice";
import { counterReducer } from "./counter/counterSlice";

export const store = configureStore(
    {
        reducer: {
            color:colorReducer,
            count:counterReducer
        }
    }
)