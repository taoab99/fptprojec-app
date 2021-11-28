import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./SliceReducer/CartSlice";
import ProductListSlice from "./SliceReducer/ProductListSlice";
import ProductSlice from "./SliceReducer/ProductSlice";
import toggleMenuSlice from "./SliceReducer/ToggleMenuSlice";
import UserLoginSlice from "./SliceReducer/UserLoginSlice";

export const store = configureStore({
    reducer: {
        toggleMenu: toggleMenuSlice,
        user: UserLoginSlice,
        product: ProductSlice,
        productlist: ProductListSlice,
        cart: CartSlice
    }
});
export default store;