import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { setCategoryFilter, setSortOrder, setPriceRange, setData, setIsLoading } from './actions';
import { ProductCategory, IProduct } from '../../data';
import { SortOrder } from '../components/SortChoice';

export interface IProductsListState {
    sortOrder?: SortOrder;
    categoryFilter?: ProductCategory;
    priceRange?: [number, number];
    products: Record<number, IProduct>;
    isLoading: boolean;
}

export const initialState: IProductsListState = {
    products: [],
    isLoading: false,
};

const productsListReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(setCategoryFilter, (state, { payload }) => {
            state.categoryFilter = payload;
        })
        .addCase(setSortOrder, (state, { payload }) => {
            state.sortOrder = payload;
        })
        .addCase(setPriceRange, (state, { payload }) => {
            state.priceRange = payload;
        })
        .addCase(setData, (state, { payload }) => {
            state.products = payload;
        })
        .addCase(setIsLoading, (state, { payload }) => {
            state.isLoading = payload;
        })
);

export default productsListReducer;
