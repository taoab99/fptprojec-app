import { React } from 'react';
import { Tag } from 'antd';


function Tags() {
    const handleTag = (tag) => {
        console.log('hello', tag);
    }
    const list = [
        {
            name: 'apple'
        },
        {
            name: 'bao da- ốp lưng- dán màn hình'
        },
        {
            name: 'BlackBerry'
        },
        {
            name: 'Laptop'
        },
        {
            name: 'LaptopAsus'
        },
        {
            name: 'Laptop-Dell'
        },
        {
            name: 'Laptop-HP'
        },
        {
            name: 'Laptop-Lenovo'
        },
        {
            name: 'Loa'
        },
        {
            name: 'Macbook'
        },
        {
            name: 'Motorola'
        },
        {
            name: 'Máy nghe nhạc'
        },
        {
            name: 'Nokia'
        },
        {
            name: 'Phụ kiện'
        },
        {
            name: 'Phụ kiện âm thanh'
        },
        {
            name: 'Samsung'
        },
        {
            name: 'Tablet'
        },
        {
            name: 'Tablet Beneve'
        },
        {
            name: 'Tablet Cutepad'
        },
        {
            name: 'Tablet Huawei'
        },
        {
            name: 'Tablet Ipad'
        },
        {
            name: 'Tablet Intel'
        },
        {
            name: 'Tablet Kindle'
        },
        {
            name: 'Tablet Mobell'
        },
        {
            name: 'Tablet Samsung'
        },
        {
            name: 'Tai nghe'
        },
        {
            name: 'Điện thoại'
        },
    ]
    return (
        <div className="tag">
            <h3>Danh mục sản phẩm</h3>
            <div className="tags-box">
                {
                    list.map((tag, index) => {
                        return (
                            <Tag key={index} onClick={() => handleTag(tag)}>{tag.name}</Tag>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Tags;