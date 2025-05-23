/* This code snippet is setting up a Redux store using the `@reduxjs/toolkit` library in a JavaScript
environment. */
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
const store = configureStore({
    reducer: {
        auth: authSlice
    },
});

export default store;