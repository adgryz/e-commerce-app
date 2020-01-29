import React from 'react';
import { Select } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCategory } from '../../data';
import { setCategoryFilter } from '../store/actions';
import { categoryToRoute } from '../services/routing';
import { selectCategoryFilter } from '../store/selectors';

const { Option } = Select;

const CategoryFilter: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const selectedCategory = useSelector(selectCategoryFilter);
    const handleChange = (category: ProductCategory) => {
        dispatch(setCategoryFilter(category));
        const route = categoryToRoute(category);
        history.push(`${route}`);
    };

    const categories: ProductCategory[] = [
        'Men Accessories',
        'Women Accessories',
        'Children Accessories',
        'Sports Accessories',
    ];
    const options = categories.map((category) => (
        <Option key={category} value={category}>
            {category}
        </Option>
    ));

    return (
        <Select
            placeholder="Category"
            value={selectedCategory}
            style={{ width: 180, margin: 10 }}
            onChange={handleChange}>
            {options}
        </Select>
    );
};

export default CategoryFilter;
