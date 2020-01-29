import React from 'react';
import styled from 'styled-components';

import CategoryChoice from './components/CategoryChoice';
import { CategoryRoute } from '../../routes';

const LandingPage: React.FC = () => {
    return (
        <Container>
            <CategoryChoice
                category={CategoryRoute.Women}
                text="WOMEN"
                imgSrc="https://previews.123rf.com/images/anjelagr/anjelagr1601/anjelagr160100060/52244497-women-s-set-of-fashion-accessories-on-wooden-background-shoes-handbag-and-cosmetics.jpg"
                color="rgba(255,192,203, 0.6)"
            />
            <CategoryChoice
                category={CategoryRoute.Men}
                imgSrc="https://previews.123rf.com/images/narstudio/narstudio1508/narstudio150800068/43518287-men-accessories-black-elegant-accessories-pieces-isolated-on-white-wooden-table-top-view-.jpg"
                text="MEN"
                color="rgba(100,149,237, 0.6)"
            />
            <CategoryChoice
                imgSrc="https://previews.123rf.com/images/matka_w/matka_w1411/matka_w141100184/33989624-baby-accessories-on-white-wood-children.jpg"
                category={CategoryRoute.Children}
                text="CHILDREN"
                color="	rgba(255,255,0,0.6)"
            />
            <CategoryChoice
                imgSrc="https://pngimage.net/wp-content/uploads/2018/06/sports-accessories-png-1.png"
                category={CategoryRoute.Sports}
                text="SPORTS"
                color="	rgba(220,20,60,0.6)"
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default LandingPage;
