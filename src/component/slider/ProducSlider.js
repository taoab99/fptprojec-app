import { React, Fragment, useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosCliean from '../../RestApi/ClientAPI';
import { addProduct } from '../../app/SliceReducer/ProductSlice';


function ProductSlider(props) {
    const [products, setproducts] = useState(null);
    const dispatch = useDispatch();
    const enpont = props.enpont;
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: props.number,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        const fetchData = async () => {
            const phone = await axiosCliean.get(enpont)
            setproducts(phone);
        }
        fetchData();
    }, []);

    const handleProduct = (product) => {
        const actions = addProduct(product);
        dispatch(actions);
    }
    return (
        <Fragment>
            {
                products ? <Slider {...settings}>
                    {
                        products.map((item, index) => {
                            return (
                                <Card
                                    className="card"
                                    key={index}
                                    hoverable
                                    cover={<img alt={item.name} src={item.thumnail[0]} />}
                                    extra={
                                        item.sale > 0 ?
                                            <span className="extra">Giảm giá
                                            </span> : null
                                    }
                                >
                                    <div className="cardTitle">
                                        <Link
                                            to={`/sanpham/${item.name}`}
                                            onClick={() => handleProduct(item)}
                                        >
                                            {item.name}
                                        </Link>
                                        <p>
                                            <span>{item.price.toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            })} </span>
                                        </p>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Slider> : null
            }

        </Fragment >
    )
}

export default memo(ProductSlider);