import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({

    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{

            state.push(action.payload) 
            // paylouds are variables which store argument from other function
        },

        removeItemFromWishlist:(state,action)=>{
            return state.filter(item=>item.id !== action.payload)
        }

    }
})

export const {addToWishlist,removeItemFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;