import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addProduct } from '../../app/SliceReducer/ProductSlice';
import Nav from '../menu/Nav';
import PostList from '../post/PostList';
import '../../Sass/ProducList.sass';
import { Col, Row, Breadcrumb, Select, Card } from 'antd';
import { fetchProductList } from '../../app/SliceReducer/ProductListSlice';
import Tags from '../TagElements/Tags';


function ProductList() {
    const productlist = useSelector(state => state.productlist);
    const dispatch = useDispatch();
    const products = productlist.value;
    const loading = productlist.loading;
    const location = useLocation();
    const enpont = location.state;
    const Options = [
        {
            name: "Thứ tự mặc định",
            value: enpont
        },
        {
            name: "Giá từ thấp đến cao",
            value: `${enpont}&_sort=price&_order=asc`
        },
        {
            name: "Giá từ cao xuống thấp",
            value: `${enpont}&_sort=price&_order=desc`
        },
    ];
    const path = location.pathname;
    let name;
    switch (path) {
        case "/dienthoai":
            name = "ĐIỆN THOẠI";
            break;
        case "/laptop":
            name = "LAPTOP";
            break;
        case "/dienthoai/apple":
            name = "APPLE";
            break;
        case "/dienthoai/samsung":
            name = "SAMSUNG";
            break;
        case "/tablet":
            name = "MÁY TÍNH BẢNG";
            break;
        case "/phukien":
            name = "PHỤ KIỆN";
            break;
        case "/dienthoai":
            name = "ĐIỆN THOẠI";
            break;
        case "/khuyenmai":
            name = "SP GIẢM GIÁ";
            break;
        case "/timkiem":
            name = "KẾT QUẢ TÌM KIẾM";
            break;
        default:
            break;
    };

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchProductList(enpont));
        };
        fetchData();
    }, [enpont]);

    const handleProduct = (product) => {
        const actions = addProduct(product);
        dispatch(actions);
    };
    const handleSelect = (event) => {
        const actions = fetchProductList(event);
        dispatch(actions);
    }
    const getProducts = (loading) => {
        if (loading === "loading") {
            return <div>loading...</div>
        }
        else if (loading === "error") {
            return <div>không tìm thấy sản phẩm phù hợp</div>
        }
        else {
            return <Row className="produclist-conten">
                {
                    products ? products.map((product, index) => {
                        return (
                            <Col
                                className="productlist-item"
                                span={12}
                                sm={8}
                                md={6}
                                key={index}
                            >
                                <Card
                                    className="card"
                                    hoverable
                                    cover={<img alt={product.name} src={product.thumnail[0]} />}
                                    extra={
                                        product.sale > 0 ?
                                            <span className="extra">Giảm giá {product.sale} %
                                            </span> : null
                                    }
                                >
                                    <div className="cardTitle">
                                        <Link
                                            to={`/sanpham/${product.name}`}
                                            onClick={() => handleProduct(product)}
                                        >
                                            {product.name}
                                        </Link>
                                        <p>
                                            <span>{product.price.toLocaleString('vi-VN', {
                                                style: "currency",
                                                currency: 'VND'
                                            })} &nbsp; </span>
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    }) : null
                }
            </Row>
        }
    }
    const { Option } = Select;
    return (
        <div className="conten">
            <div className="produclist-breadcrumbs">
                <Breadcrumb >
                    <Breadcrumb.Item>
                        <Link to="/">TRANG CHỦ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={
                            {
                                pathname: location.pathname,
                                state: enpont
                            }
                        }>{name}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="produclist-flex">
                    <h3>Xem tất cả {products && products.length} kết quả</h3>
                    <Select defaultValue={enpont} size="middle"
                        onChange={(event) => handleSelect(event)}>
                        {
                            Options.map((option, index) => {
                                return (
                                    <Option
                                        key={index}
                                        value={option.value}
                                    >
                                        {option.name}
                                    </Option>
                                )
                            })
                        }
                    </Select>
                </div>
            </div>
            <Row style={{ marginBottom: "10px" }}>
                <Col span={0} lg={6}>
                    <div className="danhmuc">
                        <h2 className="danhmuc-text">DANH MỤC SẢN PHẨM</h2>
                        <Nav />
                        <h3 className="mt-20">TIN ĐƯỢC QUAN TÂM</h3>
                        <PostList enpont="/post" />
                    </div>
                </Col>
                <Col span={24} lg={18}>
                    {
                        getProducts(loading)
                    }

                </Col>
            </Row>
            <Tags />
        </div >
    )
}
export default ProductList;