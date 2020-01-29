import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getProductsCategoryRoute, CategoryRoute } from '../../../routes';

interface ICategoryChoiceProps {
    text: string;
    category: CategoryRoute;
    imgSrc: string;
    color: string;
}

const CategoryChoice: React.FC<ICategoryChoiceProps> = ({ text, category, imgSrc, color }) => {
    return (
        <Container>
            <Link to={getProductsCategoryRoute(category)}>
                <StyledImage src={imgSrc} alt={category} />
                <ColorOverlay color={color} />
                <TitleBar color={color}>{text}</TitleBar>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    margin: 30px;
    max-width: 100%;
`;

const StyledImage = styled.img`
    width: 600px;
    max-width: 100%;
    height: 100%;
`;

const ColorOverlay = styled.div`
    width: 600px;
    height: 100%;
    background: ${(p) => p.color};
    position: absolute;
    top: 0px;
    max-width: 100%;
`;

const TitleBar = styled.div`
    width: 600px;
    height: 33%;
    background: ${(p) => p.color};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
    max-width: 100%;
`;

export default CategoryChoice;
