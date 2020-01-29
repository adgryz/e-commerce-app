import { createReducer } from '@reduxjs/toolkit';
import {
    addProductToCart,
    removeProductFromCart,
    changeProductAmount,
    confirmCheckOut,
    finishPurchase,
    setReceiptShown,
} from './actions';

export interface ICartProduct {
    amount: number;
    id: number;
}

export interface ICheckOutState {
    products: Record<number, ICartProduct>;
    receiptProducts: Record<number, ICartProduct>;
    isReceiptShown: boolean;
    isCartShown: boolean;
}

export const initialState: ICheckOutState = {
    products: [],
    receiptProducts: [],
    isReceiptShown: false,
    isCartShown: false,
};

const checkOutReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(addProductToCart, (state, { payload }) => {
            const product = state.products[payload];
            const newProduct: ICartProduct = product
                ? { ...product, amount: product.amount + 1 }
                : { id: payload, amount: 1 };
            state.products = { ...state.products, [payload]: newProduct };
        })
        .addCase(removeProductFromCart, (state, { payload }) => {
            delete state.products[payload];
        })
        .addCase(changeProductAmount, (state, { payload }) => {
            const product = state.products[payload.productId];
            product.amount = payload.amount;
        })
        .addCase(confirmCheckOut, (state) => {
            state.receiptProducts = state.products;
            state.products = [];
            state.isReceiptShown = true;
        })
        .addCase(finishPurchase, (state) => {
            state.receiptProducts = [];
            state.isReceiptShown = false;
        })
        .addCase(setReceiptShown, (state, { payload }) => {
            state.isReceiptShown = payload;
        })
);

export default checkOutReducer;
