import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setSortOrder } from '../store/actions';

const { Option } = Select;

export enum SortOrder {
    LowestPrice = 'Lowest Price',
    HighestPrice = 'Highest Price',
}

const SortChoice: React.FC = () => {
    const dispatch = useDispatch();
    const handleChange = (sortOrder: SortOrder) => dispatch(setSortOrder(sortOrder));

    const sortOrders: SortOrder[] = [SortOrder.LowestPrice, SortOrder.HighestPrice];
    const options = sortOrders.map((order) => (
        <Option key={order} value={order}>
            {order}
        </Option>
    ));

    return (
        <Select
            placeholder="Sort Order"
            defaultValue={undefined}
            style={{ width: 120, margin: 10 }}
            onChange={handleChange}>
            {options}
        </Select>
    );
};

export default SortChoice;
