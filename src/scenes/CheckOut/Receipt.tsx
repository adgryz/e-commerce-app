import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import styled from 'styled-components';

import ReceiptEntry from './components/ReceiptEntry';
import { selectTotalReceiptPrice, selectFullReceiptProductsList } from './store/selectors';
import { getInvoiceNumber } from './services/invoice';
import { formatPrice } from '../../services/format';
import { finishPurchase } from './store/actions';

interface IReceiptProps {
    hidePopover: () => void;
}

const Receipt: React.FC<IReceiptProps> = ({ hidePopover }) => {
    const cartProducts = useSelector(selectFullReceiptProductsList);
    const productsList = cartProducts.map((product) => (
        <ReceiptEntry key={product.id} product={product} />
    ));
    const totalPrice = useSelector(selectTotalReceiptPrice);

    const dispatch = useDispatch();
    const handleFinish = () => {
        hidePopover();
        dispatch(finishPurchase());
    };

    return (
        <div>
            <div>
                Invoice number: <BoldText>{getInvoiceNumber()}</BoldText>
            </div>
            {productsList}
            <PriceContainer>
                <BoldText>Total: {formatPrice(totalPrice)}</BoldText>
            </PriceContainer>
            <Button type="primary" onClick={handleFinish}>
                Finish
            </Button>
        </div>
    );
};

const BoldText = styled.span`
    font-weight: bold;
`;

const PriceContainer = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
`;

export default Receipt;
