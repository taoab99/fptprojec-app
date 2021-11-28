import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { deleteCart, getCart, putNumber } from '../../app/SliceReducer/CartSlice';

function Cart(props) {
    const user = useSelector(state => state.user.user);
    const cart = useSelector(state => state.cart.cartList);
    const dispatch = useDispatch();
    const xoasanpham = async (user, id) => {
        const actions = deleteCart({ user, id });
        dispatch(actions);
        const actions2 = getCart(user);
        await dispatch(actions2);
    };
    const handleNumber = async (item, number, user) => {
        const a = item.soluongmua + number;
        if (a >= 1) {
            const newItem = {
                ...item,
                soluongmua: a
            };
            const arr = {
                id: item.id,
                push: newItem
            }
            const actions = await putNumber(arr);
            dispatch(actions);
            await dispatch(getCart(user));
        } else {
            return
        }

    };
    const totalMoney = (cart) => {
        const tongtien = cart.reduce((total, cart) => {
            return total += (cart.price - (cart.price / 100 * cart.sale)) *
                cart.soluongmua;
        }, 0);
        return tongtien;
    }
    const column = [
        {
            title: "Sản Phẩm",
            dataIndex: 'sanpham',
            key: 'sanpham',
            render: (text) => {
                return (
                    <div className="tableCart-item">
                        <CloseCircleOutlined
                            onClick={
                                () => xoasanpham(user, text.id)
                            }
                        />
                        <img
                            src={text.thumnail[0]}
                            alt={text.name}
                            style={{ width: "60px", margin: "0 10px" }}
                        />
                        {text.name}
                    </div>
                )
            }
        },
        {
            title: "Giá",
            dataIndex: 'gia',
            key: 'gia',
            render: (cartItem) => {
                return <p style={{ color: "#d70909" }}>
                    {
                        cartItem.price.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        })
                    }
                </p>
            }
        },
        {
            title: "Số Lượng",
            dataIndex: 'soluong',
            key: 'soluong',
            render: (cartItem) => {

                return (
                    <div className="cartNumberOrder">
                        <span onClick={() => handleNumber(cartItem, -1, user)}>
                            -
                        </span>
                        <span>
                            {cartItem.soluongmua}
                        </span>
                        <span onClick={() => handleNumber(cartItem, 1, user)}>
                            +
                        </span>
                    </div>
                );
            }
        },
        {
            title: "Tổng Cộng",
            dataIndex: 'tongcong',
            key: 'tongcong',
            render: (cartItem) => {
                const total = (cartItem.price - (cartItem.price / 100 * cartItem.sale)) *
                    cartItem.soluongmua;
                return <p style={{ color: "#d70909" }}>
                    {
                        total.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        })
                    }
                </p>

            }
        }
    ];
    const data = cart.map((item, index) => {
        return {
            key: `${index}`,
            sanpham: item,
            gia: item,
            soluong: item,
            tongcong: item
        }
    });

    return (
        <div className="conten">
            {
                cart.length <= 0 ?
                    <div className="cart-empty">
                        <h2 className="font16 mb20">Chưa có sản phẩm nào trong giỏ hàng</h2>
                        <Link to="/" className="font16">Quay trở lại cửa hàng</Link>
                    </div> :
                    <div className="mb50">
                        <Row gutter={16, 16}>
                            <Col span={24} md={15}>
                                <div>
                                    <Table
                                        size="small"
                                        scroll={{ x: 'calc(700px + 50%)', y: 400 }}
                                        columns={column}
                                        dataSource={data}
                                        pagination={false}
                                    />
                                </div>
                            </Col>
                            <Col span={24} md={9}>
                                <div className="payCart">
                                    <div className="payCart-Item">
                                        <p style={{ fontWeight: "600" }}>Tổng Số Lượng</p>
                                    </div>
                                    <div className="payCart-Item">
                                        <p className="font16">Sản phẩm</p>
                                        <span className="color">{cart.length}</span>
                                    </div>
                                    <div className="payCart-Item">
                                        <p className="font16">Giao hàng</p>
                                        <span >Giao hàng miễn phí</span>
                                    </div>
                                    <div className="payCart-Item mb20">
                                        <p className="font16">Tổng cộng</p>
                                        <span className="color">
                                            {
                                                totalMoney(cart).toLocaleString('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        <Button block className="font16 fontbold btn-white">TIẾN HÀNH THANH TOÁN</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
            }
        </div>
    )
};

export default Cart;