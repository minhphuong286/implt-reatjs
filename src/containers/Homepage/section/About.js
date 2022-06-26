import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

import './About.scss';

class About extends Component {



    render() {
        return (
            <>
                <div className='section-share about'>
                    <div className='section-share-title'>
                        <h2>Truyền thông nói về BookingCare</h2>
                    </div>
                    <div className='section-share-content'>
                        <iframe width="50%" height="100%"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <ul className='about-others'>
                            <li>
                                <a href='#'>
                                    <div className='logo-article logo1'></div>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div className='logo-article logo2'></div>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div className='logo-article logo3'></div>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div className='logo-article logo4'></div>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <div className='logo-article logo5'></div>
                                </a>
                            </li>
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
