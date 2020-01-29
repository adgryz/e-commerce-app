import React from 'react';
import styled from 'styled-components';

import { IProductOrder } from './ProductThumbnail';
import { formatPrice } from '../../../services/format';

interface IReceiptEntryProps {
    product: IProductOrder;
}

const ReceiptEntry: React.FC<IReceiptEntryProps> = ({ product }) => {
    const { name, price, amount } = product;

    return (
        <Container>
            <span>{name}</span>
            <span>
                {amount}x{formatPrice(price)}
            </span>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`;

export default ReceiptEntry;
