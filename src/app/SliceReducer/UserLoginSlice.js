import { createSlice } from '@reduxjs/toolkit';

export const User = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        singinUser: (state, actions) => {
            const user = actions.payload;
            state.user = user;
        },
    }
});

export const { singinUser } = User.actions;
export default User.reducer;