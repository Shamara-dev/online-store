import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../types';
import { RootState } from '../app/store';

interface ProductState {
    products: CartProduct[];
    totalPrice: number;
}

const initialState: ProductState = {
    products: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CartProduct>) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        removeAllProducts: (state) => {
            state.products = [];
        },
        increaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.products = state.products.map((product: CartProduct) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        },
        decreaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.products = state.products.map((product: CartProduct) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
        },
    },
});

const selectProducts = (state: RootState) => state.cart.products;

export const selectTotalPrice = createSelector([selectProducts], (products) =>
    products
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2)
);

export const selectCartQuantity = createSelector([selectProducts], (products) =>
    products.reduce((total, product) => total + product.quantity, 0)
);

export const {
    addProductToCart,
    removeProductFromCart,
    removeAllProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
