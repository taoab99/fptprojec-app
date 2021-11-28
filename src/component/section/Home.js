import { React } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Caraousel from '../slider/Slider';
import yoga from '../../image/sliderImage/yoga.jpg';
import uudai from '../../image/sliderImage/uudai.jpg';
import bannerTablet from '../../image/sliderImage/banner_LenovoYogaBook-H3.jpg';
import bannerLaptop from '../../image/sliderImage/banner-H3_Laptop_T12.jpg';
import ProductSlider from '../slider/ProducSlider';
import Tags from '../TagElements/Tags';
import PostList from '../post/PostList';

function Home() {

    const NameProducts = (props) => {
        return (
            <div className="postMedia" style={{ padding: "20px 0" }}>
                <h3>{props.name.toUpperCase()} ĐƯỢC QUAN TÂM</h3>
                <Link to={props.to}>Xem tất cả {props.name}</Link>
            </div>
        )
    }
    return (
        <div className="conten bg-content">
            <Row>
                <Col span={24} sm={16} >
                    <div className="p-right10">
                        <Caraousel />
                    </div>
                </Col>
                <Col span={24} sm={8}>
                    <div className="p-left10">
                        <div className="sliderItem">
                            <img className="mb10" src={yoga} alt="ảnh banner" />
                            <img className="mb10" src={uudai} alt="ảnh banner" />

                            <div className="postMedia">
                                <h3> TIN CÔNG NGHỆ NỔI BẬT</h3>
                                <Link to="post">xem tất cả</Link>
                            </div>
                            <PostList enpont="/post/?_limit=2" />
                        </div>
                    </div>
                </Col>
            </Row>
            <NameProducts
                name="Điện thoại"
                to={{
                    pathname: "/dienthoai",
                    state: "/products?danhmuc=dienthoai"
                }}
            />
            <ProductSlider number={4} enpont="/products/?danhmuc=dienthoai&_page=1&_limit=8" />

            <NameProducts
                name="Laptop"
                to={{
                    pathname: "/laptop",
                    state: "/products?danhmuc=laptop"
                }}
            />
            <Row>
                <Col span={24} sm={6}>
                    <img src={bannerLaptop} alt="ảnh" style={{ height: '100%' }} />
                </Col>
                <Col span={24} sm={18}>
                    <ProductSlider number={3} enpont="/products/?danhmuc=laptop&_page=1&_limit=8" />
                </Col>
            </Row>

            <NameProducts
                name="Tablet"
                to={{
                    pathname: "/tablet",
                    state: "/products?danhmuc=tablet"
                }}
            />
            <Row>
                <Col span={24} sm={6}>
                    <img src={bannerTablet} alt="ảnh" style={{ height: '100%' }} />
                </Col>
                <Col span={24} sm={18}>
                    <ProductSlider number={3} enpont="/products/?danhmuc=tablet&_page=1&_limit=8" />
                </Col>
            </Row>
            <NameProducts
                name="Phụ kiện"
                to={{
                    pathname: "/phukien",
                    state: "/products?danhmuc=phukien"
                }}
            />
            <ProductSlider number={4} enpont="/products/?danhmuc=phukien&_page=1&_limit=8" />
            <Tags />
        </div>
    )
}

export default Home;