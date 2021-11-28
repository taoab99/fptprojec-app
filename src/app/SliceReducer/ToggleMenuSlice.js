import { createSlice } from '@reduxjs/toolkit'

export const toggleMenuSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false
    },
    reducers: {
        toogleMenu: state => {
            const value = state.value;
            state.value = !value
        }
    }
})

export const { toogleMenu } = toggleMenuSlice.actions

export default toggleMenuSlice.reducer