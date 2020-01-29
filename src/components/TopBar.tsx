import React, { useState } from 'react';
import { Icon, Badge, Popover } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CheckOut from '../scenes/CheckOut';
import { selectCartProductsCount, selectIsReceiptShown } from '../scenes/CheckOut/store/selectors';
import { LANDING_PAGE } from '../routes';
import Receipt from '../scenes/CheckOut/Receipt';

const TopBar: React.FC = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const productsCount = useSelector(selectCartProductsCount);

    const hidePopover = () => setIsCartVisible(false);
    const isReceiptShown = useSelector(selectIsReceiptShown);
    const popOverContent = isReceiptShown ? <Receipt hidePopover={hidePopover} /> : <CheckOut />;

    return (
        <Container>
            <div>
                <Link to={LANDING_PAGE}>
                    <Logo type="shopping" />
                    <Title>E-Commerce Application</Title>
                </Link>
            </div>

            <Popover
                content={popOverContent}
                trigger="click"
                placement="leftTop"
                visible={isCartVisible}
                onVisibleChange={setIsCartVisible}>
                <Badge count={productsCount}>
                    <Icon style={{ fontSize: 32, cursor: 'pointer' }} type="shopping-cart" />
                </Badge>
            </Popover>
        </Container>
    );
};

const Container = styled.div`
    width: '100%';
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
`;

const Logo = styled(Icon)`
    font-size: 32px;
    margin-right: 20px;
`;

const Title = styled.span`
    font-size: 32px;
    font-weight: bold;
    color: #444;
`;

export default TopBar;
