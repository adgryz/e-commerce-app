import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { setCategoryFilter, setSortOrder, setPriceRange } from './actions';
import data, { ProductCategory, IProduct } from '../../data';
import { SortOrder } from '../components/SortChoice';

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

export interface IProductsListState {
    sortOrder?: SortOrder;
    categoryFilter?: ProductCategory;
    priceRange?: [number, number];
    products: Record<number, IProduct>;
}

export const initialState: IProductsListState = {
    products: data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
};

const productsListReducer = createReducer(initialState, {
    [setCategoryFilter.type]: handleSetCategoryFilter,
    [setSortOrder.type]: handleSetSortOrder,
    [setPriceRange.type]: handleSetPriceRange,
});

export default productsListReducer;
