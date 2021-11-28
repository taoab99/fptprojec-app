import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosCliean from "../../RestApi/ClientAPI";

export const fetchProductList = createAsyncThunk('fetchAPI', async (enpont) => {
    const productlist = await axiosCliean.get(enpont)
    return productlist;
})
const ProducList = createSlice({
    name: 'getProductList',
    initialState: {
        loading: null,
        value: null
    },
    extraReducers: {
        [fetchProductList.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchProductList.rejected]: (state) => {
            state.loading = 'error';
        },
        [fetchProductList.fulfilled]: (state, actions) => {
            state.loading = 'succes';
            state.value = actions.payload;
        }
    }
});

export const { actionDefault } = ProducList.actions;
export default ProducList.reducer;