import { IRootState } from '../../../store';
import { createSelector } from '@reduxjs/toolkit';
import { SortOrder } from '../components/SortChoice';
import { IProduct } from '../../data';

export const selectSortOrder = (state: IRootState) => state.productsList.sortOrder;
export const selectCategoryFilter = (state: IRootState) => state.productsList.categoryFilter;
export const selectPriceRange = (state: IRootState) => state.productsList.priceRange;

export const selectAllProducts = (state: IRootState) => state.productsList.products;
export const selectAllProductsList = createSelector([selectAllProducts], (products) =>
    Object.values(products)
);

export const selectFilteredAndSortedProducts = createSelector(
    [selectAllProductsList, selectSortOrder, selectCategoryFilter, selectPriceRange],
    (products, sortOrder, categoryFilter, priceRange) => {
        const filteredByCategory = categoryFilter
            ? products.filter(({ category }) => category === categoryFilter)
            : products;
        const filteredByPrice = priceRange
            ? filteredByCategory.filter(
                  ({ price }) => price >= priceRange[0] && price <= priceRange[1]
              )
            : filteredByCategory;
        return sortOrder ? filteredByPrice.sort(getSorter(sortOrder)) : filteredByPrice;
    }
);

const getSorter = (sortOrder: SortOrder) => (a: IProduct, b: IProduct) =>
    sortOrder === SortOrder.HighestPrice ? b.price - a.price : a.price - b.price;
