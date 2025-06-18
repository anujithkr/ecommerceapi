import { configureStore } from "@reduxjs/toolkit";
import Wishlist from "./wishlistSlice";
import cartData from "./cartSlice";

const store = configureStore({
    reducer:{

        wishListItems:Wishlist,
        cartItems: cartData,
    }
})
export default store;