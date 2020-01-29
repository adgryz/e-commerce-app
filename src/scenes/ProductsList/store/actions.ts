import { createAction } from '@reduxjs/toolkit';

import { ProductCategory, IProduct } from '../../data';
import { SortOrder } from '../components/SortChoice';

export const setData = createAction<Record<number, IProduct>>('productsList/setData');
export const setIsLoading = createAction<boolean>('productsList/setIsLoading');
export const setCategoryFilter = createAction<ProductCategory>('productsList/setCategoryFilter');
export const setSortOrder = createAction<SortOrder>('productsList/setSortOrder');
export const setPriceRange = createAction<[number, number]>('productsList/setPriceRange');
