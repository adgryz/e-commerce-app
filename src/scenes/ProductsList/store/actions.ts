import { createAction } from '@reduxjs/toolkit';

import { ProductCategory } from '../../data';
import { SortOrder } from '../components/SortChoice';

export const setCategoryFilter = createAction<ProductCategory>('productsList/setCategoryFilter');
export const setSortOrder = createAction<SortOrder>('productsList/setSortOrder');
export const setPriceRange = createAction<[number, number]>('productsList/setPriceRange');
