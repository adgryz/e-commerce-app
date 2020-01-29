import React from 'react';
import { Card, Icon, Select } from 'antd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { IProduct } from '../../data';
import { removeProductFromCart, changeProductAmount } from '../store/actions';
import { formatPrice } from '../../../utils/format';

const { Option } = Select;

export interface IProductOrder extends IProduct {
    amount: number;
}

interface IProductThumbnailProps {
    product: IProductOrder;
}

const ProductThumbnail: React.FC<IProductThumbnailProps> = ({ product }) => {
    const { id, name, image, price, amount } = product;

    const amounts = Array(20)
        .fill(0)
        .map((v, index) => (
            <Option key={index + 1} value={index + 1}>
                {index + 1}
            </Option>
        ));

    const dispatch = useDispatch();
    const removeProduct = () => dispatch(removeProductFromCart(id));
    const changeAmount = (amount: number) =>
        dispatch(changeProductAmount({ amount, productId: id }));

    return (
        <Card style={{ margin: 10 }}>
            <MainContainer>
                <img src={image} alt={name} width={50} height={65} />
                <InfoContainer>
                    <RemoveButtonRow>
                        <Icon type="close" onClick={removeProduct} />
                    </RemoveButtonRow>
                    <InfoRow>
                        <div>{name}</div>
                        <div>{formatPrice(price)}</div>
                    </InfoRow>
                    <InfoRow>
                        <Select
                            defaultValue={amount}
                            value={amount}
                            style={{ width: 75 }}
                            onChange={changeAmount}>
                            {amounts}
                        </Select>
                        <div>Sum: {formatPrice(price * amount)}</div>
                    </InfoRow>
                </InfoContainer>
            </MainContainer>
        </Card>
    );
};

const MainContainer = styled.div`
    display: flex;
    width: 300px;
`;

const InfoContainer = styled.div`
    margin-left: 30px;
    width: 100%;
`;

const RemoveButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export default ProductThumbnail;
