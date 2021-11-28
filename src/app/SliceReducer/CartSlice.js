import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Item from "antd/lib/list/Item";
import axios from "axios";
import axiosCliean from "../../RestApi/ClientAPI";

export const getCart = createAsyncThunk('cartSlice', async (user) => {
    const cart = await axiosCliean.get(`/cart?user=${user}`);
    return cart;
});
export const deleteCart = createAsyncThunk('deletecart', async (a) => {
    await axiosCliean.delete(`/cart/${a.id}`);
    return a.id;
});
export const putNumber = createAsyncThunk('themgiam', async (arr, dispatch) => {
    const a = { ...arr.push };
    await axiosCliean.put(`cart/${arr.id}`, a);
})

const CartSlice = createSlice({
    name: 'cartslice',
    initialState: {
        number: 0,
        cartList: []
    },
    extraReducers: {
        [getCart.pending]: (state) => {
            return state
        },
        [getCart.fulfilled]: (state, actions) => {
            const cart = actions.payload;
            state.number = cart.length;
            state.cartList = cart;
        },
        [getCart.rejected]: (state) => {
            return state
        }
    }
});

export default CartSlice.reducer;