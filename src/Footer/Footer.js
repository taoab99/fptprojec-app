import { React } from 'react';
import { Row, Col } from 'antd';

function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col span={24} sm={12} md={6}>
                    <div className="colIner">
                        <h3>HOTLINE HỖ TRỢ</h3>
                        <p>Hỗ trợ mua hàng &nbsp; <a href="/">0126 992 0126</a></p>
                        <p>Hỗ trợ kĩ thuật &nbsp; <a href="/">0126 992 0126</a></p>
                        <p>Hỗ trợ bảo hành &nbsp; <a href="/">0126 992 0126</a></p>
                    </div>
                </Col>
                <Col span={24} sm={12} md={8}>
                    <div className="colIner">
                        <h3>MONA MEDIA</h3>
                        <p>Địa chỉ:  &nbsp; 151 Hồ Bá Kiện, P15, Q10, HCM</p>
                        <p>Điện thoại: &nbsp; <a href="/">0126 992 0126</a></p>
                        <p>Email: &nbsp; <a href="/">khactao99@gmail.com</a></p>
                    </div>
                </Col>
                <Col span={24} sm={16} md={10}>
                    <div className="colIner">
                        <div className="colIner">
                            <Row>
                                <Col span={24} sm={10}>
                                    <p>Hỗ trợ thanh toán</p>
                                </Col>
                                <Col span={24} sm={14}>
                                    <img style={{ width: "50%" }} src="http://mauweb.monamedia.net/fptshop/wp-content/uploads/2017/12/icon_payment.png" alt="ảnh" />
                                </Col>
                            </Row>
                        </div>
                        <div className="colIner">
                            <Row>
                                <Col span={24} sm={10}>
                                    <p>Tư vấn miễn phí(24/7)<br /><a href="/">0126 992 0126</a></p>
                                </Col>
                                <Col span={24} sm={14}>
                                    <p>Góp ý phản ánh(8h00- 22h00)<br /><a href="/">0126 992 0126</a></p>
                                </Col>
                            </Row>
                        </div>
                        <div className="colIner">
                            <img src="http://mauweb.monamedia.net/fptshop/wp-content/uploads/2017/12/icon_cong_nhan.png" alt="ảnh" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;