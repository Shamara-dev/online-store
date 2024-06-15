import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface CategoryState {
    categories: string[];
    activeCategory: string;
    searchQuery: string;
}

const initialState: CategoryState = {
    categories: [
        'all',
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing",
    ],
    activeCategory: 'all',
    searchQuery: '',
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => {
            state.activeCategory = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const selectCategories = (state: RootState) => state.category.categories;
export const selectActiveCategory = (state: RootState) =>
    state.category.activeCategory;
export const selectSearchQuery = (state: RootState) =>
    state.category.searchQuery;

export const { setActiveCategory, setSearchQuery } = categorySlice.actions;
export default categorySlice.reducer;
