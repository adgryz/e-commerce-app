import React from 'react';
import { Button, Card, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { IProduct } from '../../data';
import { addProductToCart } from '../../CheckOut/store/actions';
import { formatPrice } from '../../../services/format';

interface ISingleProductProps {
    product: IProduct;
}

const SingleProduct: React.FC<ISingleProductProps> = ({ product }) => {
    const { id, name, image, price } = product;

    const dispatch = useDispatch();
    const handleAddProduct = () => dispatch(addProductToCart(id));

    return (
        <StyledCard>
            <img src={image} alt={name} width={200} height={260} />
            <InfoRow>
                <div>{name}</div>
                <BoldText>{formatPrice(price)}</BoldText>
            </InfoRow>
            <ButtonRow>
                <Button onClick={handleAddProduct}>
                    <Icon type="shopping" />
                    <span>Add to cart</span>
                </Button>
            </ButtonRow>
        </StyledCard>
    );
};

const StyledCard = styled(Card)`
    width: 260px;
    margin: 20px;
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
`;

const BoldText = styled.div`
    font-weight: bold;
`;

export default SingleProduct;
