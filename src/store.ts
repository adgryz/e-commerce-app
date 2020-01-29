import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productsListReducer from './scenes/ProductsList/store/reducers';
import checkOutReducer from './scenes/CheckOut/store/reducers';

const rootReducer = combineReducers({
    productsList: productsListReducer,
    checkOut: checkOutReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default store;
