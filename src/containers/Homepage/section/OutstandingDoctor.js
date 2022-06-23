import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './OutstandingDoctor.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutstandingDoctor extends Component {



    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        return (
            <>
                <div className='section-share outstanding-doctor'>
                    <div className='section-share-title'>
                        <h2>Bác sĩ nổi bật tuần qua</h2>
                        <a href='#' >Tìm kiếm</a>
                    </div>
                    <div className='section-share-content'>
                        <Slider {...settings}>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img1'></div>
                                        <h3>
                                            Bác sĩ Chuyên khoa II <br />
                                            Trần Minh Khuyên
                                        </h3>
                                    </a>
                                    <span className='faculty'>Sức khỏe tâm thần</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img2'></div>
                                        <h3>
                                            Bác sĩ Chuyên khoa II <br />
                                            Trần Thị Hoài Hương
                                        </h3>
                                    </a>
                                    <span className='faculty'>Da liễu</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img3'></div>
                                        <h3>
                                            Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp <br />
                                            Nguyễn Duy Hưng
                                        </h3>
                                    </a>
                                    <span className='faculty'>Da liễu</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img4'></div>
                                        <h3>
                                            Tiến sĩ, Bác sĩ  <br />
                                            Đào Đình Thi
                                        </h3>
                                    </a>
                                    <span className='faculty'>Tai mũi họng</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img5'></div>
                                        <h3>
                                            Trưởng khoa, Phó khoa Thần kinh I <br />
                                            Tạ Đình Quang
                                        </h3>
                                    </a>
                                    <span className='faculty'>Thần kinh</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img6'></div>
                                        <h3>
                                            Giáo sư, Tiến sĩ  <br />
                                            Hà Văn Quyết
                                        </h3>
                                    </a>
                                    <span className='faculty'>Tiêu hóa - Bệnh viêm gan</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img7'></div>
                                        <h3>
                                            Phó Giáo sư, Tiến sĩ, Bác sĩ  <br />
                                            Nguyễn Thị Hoài An
                                        </h3>
                                    </a>
                                    <span className='faculty'>Tai mũi họng - Nhi khoa</span>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img8'></div>
                                        <h3>
                                            PGS, TS, Giảng viên cao cấp  <br />
                                            Trần Hữu Bình
                                        </h3>
                                    </a>
                                    <span className='faculty'>Sức khỏe tâm thần</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
