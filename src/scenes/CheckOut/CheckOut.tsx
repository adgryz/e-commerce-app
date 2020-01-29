import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import ProductThumbnail from './components/ProductThumbnail';
import { selectFullCartProductsList } from './store/selectors';
import TotalPrice from './components/TotalPrice';
import { confirmCheckOut } from './store/actions';

const CheckOut: React.FC = () => {
    const cartProducts = useSelector(selectFullCartProductsList);
    const productsList = cartProducts.map((product) => <ProductThumbnail product={product} />);

    const dispatch = useDispatch();
    const handleCheckout = () => dispatch(confirmCheckOut());

    const cart =
        cartProducts.length === 0 ? (
            <div>Your cart is empty</div>
        ) : (
            <div>
                <div>{productsList}</div>
                <TotalPrice />
                <Button type="primary" size="large" onClick={handleCheckout}>
                    Continue to checkout
                </Button>
            </div>
        );
    return cart;
};

export default CheckOut;
