import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectTotalCartPrice } from '../store/selectors';
import { formatPrice } from '../../../services/format';

const TotalPrice: React.FC = () => {
    const { basePrice, totalPrice, isDiscounted } = useSelector(selectTotalCartPrice);

    const normalPrice = (
        <div>
            <SpacedText>Total:</SpacedText>
            <SpacedText>{formatPrice(basePrice)}</SpacedText>
        </div>
    );

    const discountedPrice = (
        <div>
            <SpacedText>Total:</SpacedText>
            <StrikeText>{`  ${formatPrice(basePrice)}  `}</StrikeText>
            <SpacedText>{formatPrice(totalPrice)}</SpacedText>
        </div>
    );

    return <Container>{isDiscounted ? discountedPrice : normalPrice}</Container>;
};

const Container = styled.div`
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const SpacedText = styled.span`
    margin: 5px;
`;

const StrikeText = styled(SpacedText)`
    text-decoration: line-through;
    color: #aaa;
`;

export default TotalPrice;
