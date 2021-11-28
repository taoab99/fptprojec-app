import { React, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Notification from '../notification/Notification';
import axiosCliean from '../../RestApi/ClientAPI';
import { getCart } from '../../app/SliceReducer/CartSlice';


function Product() {
    const product = useSelector(state => state.product.product);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const configurationName = product.configurationName;
    const configuration = product.configuration;
    const [image, setimage] = useState(product.thumnail[0]);
    const [number, setnumber] = useState(1);
    const history = useHistory()

    const datamap = (configurationName, configuration) => {
        const a = configurationName.map((item, index) => {
            return {
                key: index + 1,
                name: item,
                config: configuration[index]
            }
        });
        return a;
    }
    const data = datamap(configurationName, configuration);
    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
        },
        {
            dataIndex: 'config',
            key: 'config',
        },
    ];
    const handleZoom = (item) => {
        setimage(item);
    }
    const handlePrice = (price, sale) => {
        return price - (price / 100 * sale);
    }
    const changeNumber = (a) => {
        const stepValue = number + a;
        if (stepValue < 1) {
            setnumber(1)
        }
        else {
            setnumber(preState =>
                preState + a
            );
        }

    }
    const handleAddToCart = async (product) => {
        if (!user) return Notification("warning", "thông báo", " bạn chưa đăng nhập");
        const productBy = {
            ...product,
            soluongmua: number,
            user: user
        };
        try {
            const respont = await axiosCliean.post("/cart", productBy);
            if (respont) {
                await Notification("success", "thông báo", "thêm vào giỏ hàng thành công");
            }
            history.goBack();
        } catch (error) {
            Notification("warning", "thông báo", "bạn đã thêm vào giỏ hàng trước đó")
        }
        const actions = getCart(user);
        dispatch(actions);
    }
    return (
        <div className="conten">
            <Row className="Item-product">
                <Col span={24} sm={12}>
                    <div className="imageZoom">
                        <ReactImageMagnify style={{ marginBottom: "20px" }} {...{
                            enlargedImagePosition: "over",
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: image
                            },
                            largeImage: {
                                src: image,
                                width: 1000,
                                height: 1200
                            }
                        }} />
                    </div>

                    <div className="image-product">
                        {
                            product.thumnail.map((item, index) => {
                                return (
                                    <img
                                        className={image === item ? "actived" : null}
                                        key={index}
                                        src={item} alt="ảnh"
                                        onClick={() => handleZoom(item)}
                                    />
                                )
                            })
                        }
                    </div>
                </Col>
                <Col span={24} sm={12}>
                    <div className="description">
                        <h3>
                            {product.name}
                        </h3>
                        <p className="price">

                            {product.sale > 0 ? <span>
                                <span style={{ opacity: "0.5", marginRight: "20px" }}>
                                    <span style={{ textDecoration: "line-through" }}>{product.price.toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    })}</span>
                                </span>
                                <span>{
                                    handlePrice(product.price, product.sale).toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    })
                                }</span>
                            </span>
                                : <span>{product.price.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}</span>
                            }
                        </p>

                        <ul>
                            {
                                product.description.map((des, index) => {
                                    return (
                                        <li key={index}>{des}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="product-add">
                            <div className="number">
                                <span onClick={() => changeNumber(-1)}>-</span>
                                <span>{number}</span>
                                <span onClick={() => changeNumber(1)}>+</span>
                            </div>
                            <Button className="btn-bg" shape="round" onClick={() => handleAddToCart(product)}>THÊM VÀO GIỎ HÀNG</Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="motachitiet" >
                <h3>THÔNG TIN CHI TIẾT</h3>
                <Table showHeader={false} pagination={false} columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default Product;