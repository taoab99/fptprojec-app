import { React, useEffect } from 'react';
import '../../Sass/Menu.sass';
import logo from '../../image/menuImages/logo-mona-fpt.png'
import { Avatar, Popover } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import Inputsearch from './Inputsearch';
import { useSelector, useDispatch } from 'react-redux';
import { toogleMenu } from '../../app/SliceReducer/ToggleMenuSlice';
import SinginPopover from './SinginPopover';
import { Link } from 'react-router-dom';
import { getCart } from '../../app/SliceReducer/CartSlice';

function Menu(props) {
    const user = useSelector(state => state.user.user);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        const actions = getCart(user);
        dispatch(actions);
    }, [user]);
    const moneyCart = (cart) => {
        const thanhtien = cart.reduce((total, cart) => {
            const tien = (cart.price) * cart.soluongmua;
            const giamgia = (cart.price) * cart.soluongmua / 100 * cart.sale;
            return total + (tien - giamgia);
        }, 0);
        return thanhtien;
    }
    const handleToggleMenu = () => {
        const a = toogleMenu();
        dispatch(a);
    }

    return (
        <div className="menu">
            <div className="header">
                <div className="mobile-icon">
                    <MenuOutlined
                        onClick={handleToggleMenu}
                    />
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo shop" />
                    </Link>
                </div>

                <div className="search" >
                    <Inputsearch />
                </div>
                <div className="menu-right d-flex">
                    <Popover
                        content={SinginPopover}
                    >
                        <Avatar
                            size='default'
                            icon={user ? null : <UserOutlined />}
                            className="hiden"
                        >
                            {user ? user[0] : null}
                        </Avatar>


                    </Popover>
                    <div className="menu-cart">
                        <Link to="/cart">
                            <span className="hiden">
                                <span>giỏ hàng/
                                    <span className="span-text">
                                        {
                                            moneyCart(cart.cartList).toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            })
                                        }
                                    </span>
                                </span>
                            </span>
                            <span>
                                <strong>
                                    {cart.number}
                                </strong>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;