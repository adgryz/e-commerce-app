import { IRootState } from '../../../store';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllProducts } from '../../ProductsList/store/selectors';
import { ICartProduct } from './reducers';
import { IProduct } from '../../data';
import { IProductOrder } from '../components/ProductThumbnail';

const selectCartProducts = (state: IRootState) => state.checkOut.products;
const selectReceiptProducts = (state: IRootState) => state.checkOut.receiptProducts;

export const selectIsReceiptShown = (state: IRootState) => state.checkOut.isReceiptShown;
export const selectIsCartShown = (state: IRootState) => state.checkOut.isCartShown;

export const selectFullCartProductsList = createSelector(
    [selectAllProducts, selectCartProducts],
    (products, cartProducts) => selectFullProductList(products, cartProducts)
);
export const selectFullReceiptProductsList = createSelector(
    [selectAllProducts, selectReceiptProducts],
    (products, receiptProducts) => selectFullProductList(products, receiptProducts)
);
const selectFullProductList = (
    products: Record<number, IProduct>,
    cartProducts: Record<number, ICartProduct>
) => {
    return Object.values(cartProducts).map(({ id, amount }) => ({
        ...products[id],
        amount,
    }));
};

export const selectCartProductsCount = createSelector([selectFullCartProductsList], (products) =>
    products.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0)
);

export const selectTotalCartPrice = createSelector([selectFullCartProductsList], (products) =>
    selectTotalPrice(products)
);
export const selectTotalReceiptPrice = createSelector(
    [selectFullReceiptProductsList],
    (products) => selectTotalPrice(products).totalPrice
);
const selectTotalPrice = (products: IProductOrder[]) => {
    const baseTotalPrice = products.reduce((acc, curr) => {
        return acc + curr.amount * curr.price;
    }, 0);

    const totalPrice = baseTotalPrice > 50 ? getDiscountedPrice(baseTotalPrice) : baseTotalPrice;
    return {
        basePrice: baseTotalPrice,
        totalPrice: totalPrice,
        isDiscounted: baseTotalPrice !== totalPrice,
    };
};

const getDiscountedPrice = (basePrice: number) => 0.9 * basePrice;
