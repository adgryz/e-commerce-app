import React from 'react';
import { useDispatch } from 'react-redux';
import { setPriceRange } from '../store/actions';
import { Select } from 'antd';

const { Option } = Select;

export interface IPriceRange {
    range: [number, number];
    label: string;
}

const PriceFilter: React.FC = () => {
    const dispatch = useDispatch();
    const handleChange = (key: number) => dispatch(setPriceRange(priceRanges[key].range));

    const options = Object.entries(priceRanges).map(([key, priceRange]) => (
        <Option key={key} value={key}>
            {priceRange.label}
        </Option>
    ));

    return (
        <Select
            placeholder="Price Range"
            style={{ width: 120, margin: 10 }}
            onChange={handleChange}>
            {options}
        </Select>
    );
};

const priceRanges: Record<number, IPriceRange> = {
    1: {
        label: 'less than $5',
        range: [0, 5],
    },
    2: {
        label: '$5 - $10',
        range: [5, 10],
    },
    3: {
        label: '$10 - $15',
        range: [10, 15],
    },
    4: {
        label: '$15 - $20',
        range: [15, 20],
    },
    5: {
        label: 'over $20',
        range: [20, Number.POSITIVE_INFINITY],
    },
};

export default PriceFilter;
