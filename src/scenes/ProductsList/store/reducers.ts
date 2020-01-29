import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { setCategoryFilter, setSortOrder, setPriceRange, setData, setIsLoading } from './actions';
import { ProductCategory, IProduct } from '../../data';
import { SortOrder } from '../components/SortChoice';

const handleSetData = (
    state: IProductsListState,
    { payload }: PayloadAction<Record<number, IProduct>>
) => {
    state.products = payload;
};

const handleSetSortOrder = (state: IProductsListState, { payload }: PayloadAction<SortOrder>) => {
    state.sortOrder = payload;
};

const handleSetCategoryFilter = (
    state: IProductsListState,
    { payload }: PayloadAction<ProductCategory>
) => {
    state.categoryFilter = payload;
};

const handleSetPriceRange = (
    state: IProductsListState,
    { payload }: PayloadAction<[number, number]>
) => {
    state.priceRange = payload;
};

const handleSetIsLoading = (state: IProductsListState, { payload }: PayloadAction<boolean>) => {
    state.isLoading = payload;
};

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

const productsListReducer = createReducer(initialState, {
    [setCategoryFilter.type]: handleSetCategoryFilter,
    [setSortOrder.type]: handleSetSortOrder,
    [setPriceRange.type]: handleSetPriceRange,
    [setData.type]: handleSetData,
    [setIsLoading.type]: handleSetIsLoading,
});

export default productsListReducer;
