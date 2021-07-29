import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
    reducer: {
        // add the reducer to the store
        todos: todoReducer
    },
});