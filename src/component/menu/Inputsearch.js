import React, { useState } from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router';

export default function Inputsearch() {
    const [seach, setseach] = useState(null);
    const history = useHistory();
    const { Search } = Input;
    const onSearch = (event) => {
        setseach(null);
        history.push({
            pathname: "/timkiem",
            state: `/products?name_like=${seach}`
        });
    };
    const handleChange = (event) => {
        const target = event.target.value;
        setseach(target);
    };
    return (
        <Search
            placeholder="nhập tên điện thọai,máy tính, phụ kiện ... cần tìm"
            onSearch={(event) => onSearch(event)}
            onChange={(event) => handleChange(event)}
            value={seach}
            enterButton
            size="large"
        />
    )
}