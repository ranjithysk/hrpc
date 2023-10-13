import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataReducer";

const Store = configureStore({
    reducer: { DataReducer }
})
export default Store