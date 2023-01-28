import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from '../features/cartSlice'
import favoriteReducer from '../features/favoriteSlice'
import productsReducer from '../features/productsSlice'

const makeStore = () =>
  configureStore({
    reducer: {
        cartItems: cartReducer,
        favoriteItems: favoriteReducer,
        products: productsReducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
