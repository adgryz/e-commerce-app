import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import SingleProduct from './components/SingleProduct';
import SortChoice from './components/SortChoice';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
import { selectFilteredAndSortedProducts, selectIsLoading } from './store/selectors';
import { setCategoryFilter } from './store/actions';
import { routeToCategory } from './utils/routing';
import { CategoryRoute } from '../../routes';
import { Spin } from 'antd';

const ProductsList: React.FC = () => {
    const { category: categoryRoute } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const category = routeToCategory(categoryRoute as CategoryRoute);
        dispatch(setCategoryFilter(category));
    }, [categoryRoute, dispatch]);

    const filteredData = useSelector(selectFilteredAndSortedProducts);
    const isLoading = useSelector(selectIsLoading);

    const productsList = filteredData.map((product) => (
        <SingleProduct key={product.id} product={product} />
    ));

    return (
        <div>
            <FiltersContainer>
                <SortChoice />
                <CategoryFilter />
                <PriceFilter />
            </FiltersContainer>
            <Container>{isLoading ? <StyledSpinner size="large" /> : productsList}</Container>
        </div>
    );
};

const StyledSpinner = styled(Spin)`
    margin: 50px;
`;

const FiltersContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default ProductsList;
