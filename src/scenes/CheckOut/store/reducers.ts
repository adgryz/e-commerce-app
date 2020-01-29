import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
    addProductToCart,
    removeProductFromCart,
    changeProductAmount,
    IChangeProductAmountPayload,
    confirmCheckOut,
    finishPurchase,
    setReceiptShown,
} from './actions';

const handleAddProductToCart = (state: ICheckOutState, { payload }: PayloadAction<number>) => {
    const product = state.products[payload];
    const newProduct: ICartProduct = product
        ? { ...product, amount: product.amount + 1 }
        : { id: payload, amount: 1 };
    state.products = { ...state.products, [payload]: newProduct };
};

const handleRemoveProductFromCart = (state: ICheckOutState, { payload }: PayloadAction<number>) => {
    delete state.products[payload];
};

const handleConfirmCheckout = (state: ICheckOutState) => {
    state.receiptProducts = state.products;
    state.products = [];
    state.isReceiptShown = true;
};

const handleFinishPurchase = (state: ICheckOutState) => {
    state.receiptProducts = [];
    state.isReceiptShown = false;
};

const handleSetReceiptShown = (state: ICheckOutState, { payload }: PayloadAction<boolean>) => {
    state.isReceiptShown = payload;
};

const handleChangeProductAmount = (
    state: ICheckOutState,
    { payload }: PayloadAction<IChangeProductAmountPayload>
) => {
    const product = state.products[payload.productId];
    product.amount = payload.amount;
};

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

const checkOutReducer = createReducer(initialState, {
    [addProductToCart.type]: handleAddProductToCart,
    [removeProductFromCart.type]: handleRemoveProductFromCart,
    [changeProductAmount.type]: handleChangeProductAmount,
    [confirmCheckOut.type]: handleConfirmCheckout,
    [finishPurchase.type]: handleFinishPurchase,
    [setReceiptShown.type]: handleSetReceiptShown,
});

export default checkOutReducer;
