import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './MedicalFacility.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MedicalFacility extends Component {



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
                <div className='section-share medical-facility'>
                    <div className='section-share-title'>
                        <h2>Cơ sở y tế nổi bật</h2>
                        <a href='#' >Tìm kiếm</a>
                    </div>
                    <div className='section-share-content'>
                        <Slider {...settings}>
                            <div>
                                <a href='#'>
                                    <div className='img img1'></div>
                                    <h3>Bệnh viện Hữu nghị Việt Đức</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img2'></div>
                                    <h3>Bệnh viện Chợ Rẫy</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img3'></div>
                                    <h3>Phòng khám Bệnh viện Đại học Y Dược 1</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img4'></div>
                                    <h3>Bệnh viện K - Cơ sở Phan Chu Trinh</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img5'></div>
                                    <h3>Bệnh viện Ung bướu Hưng Việt</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img6'></div>
                                    <h3>Hệ thống Y tế Thu Cúc</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img7'></div>
                                    <h3>Phòng khám Đa khoa Saigon </h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img8'></div>
                                    <h3>Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
                                </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
