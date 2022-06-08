import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings';

const store = configureStore({
  reducer: { greetings: greetingsReducer },
});

export default store;
