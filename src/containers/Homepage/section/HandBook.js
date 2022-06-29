import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './HandBook.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HandBook extends Component {



    render() {

        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        return (
            <>
                <div className='section-share handbook'>
                    <div className='section-share-title'>
                        <h2><FormattedMessage id={"handbook.section-title"} /></h2>
                        <a href='#' ><FormattedMessage id={"section-share.allposts"} /></a>
                    </div>
                    <div className='section-share-content'>
                        <Slider {...settings}>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img1'></div>
                                        <h3>Phòng khám Hello Doctor có tốt không? Thế mạnh thăm khám bệnh gì?</h3>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img2'></div>
                                        <h3>Review Nha khoa Quận 1 uy tín: Bác sĩ giỏi? Cơ sở vật chất?</h3>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img3'></div>
                                        <h3>Niềng răng trong suốt (Invisalign): Quy trình niềng răng, Có những loại khay nào?</h3>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className='cell'>
                                    <a href='#'>
                                        <div className='img img4'></div>
                                        <h3>Nhổ răng khôn bao nhiêu tiền? Giá nhổ răng khôn tại các Nha khoa uy tín TPHCM</h3>
                                    </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
