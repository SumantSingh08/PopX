/* This code snippet is creating a Redux slice using the `createSlice` function from the
`@reduxjs/toolkit` package. */
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userData: null
}
const authSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        login: (state, action) =>{
            state.userData = action.payload;
        },

    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer

