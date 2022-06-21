import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './Specialty.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {



    render() {

        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        }
        return (
            <>
                <div className='specialty'>
                    <div className='specialty-title'>
                        <h2>Cơ sở y tế nổi bật</h2>
                    </div>
                    <div className='specialty-content'>
                        <Slider {...settings}>
                            <div>
                                <a href='#'>
                                    <div className='img img1'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img2'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img3'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img4'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img5'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img6'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img7'></div>
                                    <h3>Cơ xương khớp</h3>
                                </a>
                            </div>
                            <div>
                                <a href='#'>
                                    <div className='img img8'></div>
                                    <h3>Cơ xương khớp</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
