import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <>
            <header className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i className='fas fa-bars'></i>
                        <div className='lt-logo'></div>
                    </div>
                    <div className='center-content'>
                        <div className='cc-child'>
                            <div><b>Chuyên khoa</b></div>
                            <div className='sub-title'>Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className='cc-child'>
                            <div><b>Cơ sở y tế</b></div>
                            <div className='sub-title'>Chọn bệnh viện phòng khám</div>
                        </div>
                        <div className='cc-child'>
                            <div><b>Bác sĩ</b></div>
                            <div className='sub-title'>Chọn bác sĩ giỏi</div>
                        </div>
                        <div className='cc-child'>
                            <div><b>Gói khám</b></div>
                            <div className='sub-title'>Khám sức khỏe tổng quát</div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='rc-support'><i className='fas fa-question-circle'></i> Hỗ trợ</div>
                        <div className='rc-flag'>VN</div>
                    </div>
                </div>
            </header>
                <div className='after-home-header'>
                    <div className='after-home-header-up'>
                        <div className='ahhu-title'>
                            <h1>Nền tảng y tế</h1>
                            <b>Chăm sóc sức khỏe toàn diện</b>
                        </div>
                        <div className='ahhu-search'>
                            <i className='fa fa-search'></i>
                            <input type='text' placeholder='Tìm kiếm'></input>
                        </div>
                    </div>   
                    <div className='after-home-header-down'>
                        <ul>
                            <li>
                            <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        Khám <br></br>Chuyên khoa
                                    </div>
                                </a>
                            </li>
                            <li>
                            <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        Khám <br></br>Chuyên khoa
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        Khám <br></br>Chuyên khoa
                                    </div>
                                </a>
                            </li>
                            <li>
                            <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        Khám <br></br>Chuyên khoa
                                    </div>
                                </a>
                            </li>
                            <li>
                            <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        Khám <br></br>Chuyên khoa
                                    </div>
                                </a>
                            </li>
                            <li>
                            <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        Khám <br></br>Chuyên khoa
                                    </div>
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
      
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
