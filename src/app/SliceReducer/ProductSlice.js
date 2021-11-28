import { createSlice } from "@reduxjs/toolkit";

const Product = createSlice({
    name: 'product',
    initialState: {
        product: JSON.parse(localStorage.getItem("chititetsp")) ? JSON.parse(localStorage.getItem("chititetsp")) : null,
        postslice: JSON.parse(localStorage.getItem("postslice")) ? JSON.parse(localStorage.getItem("postslice")) : null,
    },
    reducers: {
        addProduct: (state, actions) => {
            const payld = actions.payload;
            state.product = payld;
            localStorage.setItem("chititetsp", JSON.stringify(state.product));
        },
        addPostSlice: (state, actions) => {
            const post = actions.payload;
            state.postslice = post;
            localStorage.setItem("postslice", JSON.stringify(state.postslice));
        }
    }
});

export const { addProduct, addPostSlice } = Product.actions;
export default Product.reducer;