import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
// Import the cartReducer from the cartSlice file
const appStore = configureStore({
    reducer: {
        // Add your reducers here
        cart:cartReducer,
    },
});
export default appStore;