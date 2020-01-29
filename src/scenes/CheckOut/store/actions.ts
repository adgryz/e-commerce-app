import { createAction } from '@reduxjs/toolkit';

export const addProductToCart = createAction<number>('checkOut/addProductToCart');
export const changeProductAmount = createAction<IChangeProductAmountPayload>(
    'checkOut/changeProductAmount'
);
export const removeProductFromCart = createAction<number>('checkOut/removeProductFromCart');

export const confirmCheckOut = createAction('checkOut/confirmCheckOut');
export const finishPurchase = createAction('checkOut/finishPurchase');

export const setReceiptShown = createAction<boolean>('checkOut/setReceiptShown');

export interface IChangeProductAmountPayload {
    productId: number;
    amount: number;
}
