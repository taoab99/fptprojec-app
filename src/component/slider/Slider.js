import { React } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../../image/sliderImage/banner-H1.jpg';
import logo2 from '../../image/sliderImage/banner-H1-Samsung-Subsidy.jpg';
import logo3 from '../../image/sliderImage/banner-TranVien-H1.jpg';
import logo4 from '../../image/sliderImage/banner-H1-F5.png';
import logo5 from '../../image/sliderImage/banner-NoteFE-H1.jpg';
import logo6 from '../../image/sliderImage/banner-vivo-H1.jpg';

function Caraousel() {
    const sliderImage = [
        {
            src: logo1,
            caption: 'I phone X mở bán chính thức'
        },
        {
            src: logo2,
            caption: 'samsung trợ giá 8.5 triệu'
        },
        {
            src: logo3,
            caption: 'tràn màn hình tràn quà'
        },
        {
            src: logo4,
            caption: 'lên đời OPPO F5 tiết'
        },
        {
            src: logo5,
            caption: 'NOTE FE trợ giá 5.5 triệu'
        },
        {
            src: logo6,
            caption: 'VIVO V7'
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    sliderImage.map((item, index) => {
                        return (
                            <div className="sliderItem" key={index}>
                                <img src={item.src} alt={item.caption} />
                                <p className="captions">{item.caption}</p>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
};

export default Caraousel;