import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/productsApi';
import cartSlice from '../features/cartSlice';
import categorySlice from '../features/categorySlice';

export const store = configureStore({
    reducer: {
        category: categorySlice,
        cart: cartSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
