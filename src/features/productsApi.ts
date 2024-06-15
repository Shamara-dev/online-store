import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => 'products/',
        }),
        getProductById: builder.query<Product, string>({
            query: (id) => `products/${id}`,
        }),
        getAllCategories: builder.query<string[], void>({
            query: () => `products/categories`,
        }),
        getProductsByCategory: builder.query<Product[], string>({
            query: (category) =>
                category === 'all'
                    ? 'products/'
                    : `products/category/${category}`,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetAllCategoriesQuery,
    useGetProductsByCategoryQuery,
} = productsApi;
