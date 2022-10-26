import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.js';
import stockReducer from './stock.js';

export default configureStore({
  reducer: {
    user:userReducer,
    stock:stockReducer
  },
});