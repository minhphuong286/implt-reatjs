import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './HomeHeader.scss';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions/appActions';
class HomeHeader extends Component {

    handleChangeLangs = (lang) => {
        this.props.changeLanguageAppRedux(lang)
    }

    render() {
        let langRedux = this.props.lang;
        console.log('check lang: ', langRedux)
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
                                <div><b><FormattedMessage id={"homeheader.specialty"} /></b></div>
                                <div className='sub-title'><FormattedMessage id={"homeheader.doctor-by-specialty"} /></div>
                            </div>
                            <div className='cc-child'>
                                <div><b><FormattedMessage id={"homeheader.health-facilities"} /></b></div>
                                <div className='sub-title'><FormattedMessage id={"homeheader.choose-hospital-clinic"} /></div>
                            </div>
                            <div className='cc-child'>
                                <div><b><FormattedMessage id={"homeheader.doctor"} /></b></div>
                                <div className='sub-title'><FormattedMessage id={"homeheader.choose-good-doctor"} /></div>
                            </div>
                            <div className='cc-child'>
                                <div><b><FormattedMessage id={"homeheader.examination-package"} /></b></div>
                                <div className='sub-title'><FormattedMessage id={"homeheader.general-health-check"} /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='rc-support'><i className='fas fa-question-circle'></i><FormattedMessage id={"homeheader.support"} /> </div>
                            <div className='rc-flag'>
                                <span
                                    className={langRedux === LANGUAGES.VI ? 'langs-vi active' : 'langs-vi'}
                                    onClick={() => this.handleChangeLangs(LANGUAGES.VI)}
                                >VN</span>
                                <span
                                    className={langRedux === LANGUAGES.EN ? 'langs-en active' : 'langs-en'}
                                    onClick={() => this.handleChangeLangs(LANGUAGES.EN)}
                                >EN</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='after-home-header'>
                    <div className='after-home-header-up'>
                        <div className='ahhu-title'>
                            <h1><FormattedMessage id={"homeheader.medical-platform"} /></h1>
                            <b><FormattedMessage id={"homeheader.comprehensive-health-care"} /></b>
                        </div>
                        <div className='ahhu-search'>
                            <i className='fa fa-search'></i>
                            <input type='text'
                                placeholder='Tìm kiếm'>

                            </input>
                        </div>
                    </div>
                    <div className='after-home-header-down'>
                        <ul>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className='far fa-hospital'></i><br></br>
                                    <div className='sub'>
                                        <FormattedMessage id={"homeheader.examination"} /> <br></br>
                                        <FormattedMessage id={"homeheader.specialty"} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className='fas fa-mobile-alt'></i><br></br>
                                    <div className='sub'>
                                        <FormattedMessage id={"homeheader.examination"} /> <br></br>
                                        <FormattedMessage id={"homeheader.remote"} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className='fas fa-procedures'></i><br></br>
                                    <div className='sub'>
                                        <FormattedMessage id={"homeheader.examination"} /> <br></br>
                                        <FormattedMessage id={"homeheader.general"} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className='fa fa-medkit'></i><br></br>
                                    <div className='sub'>
                                        <FormattedMessage id={"homeheader.test"} /><br></br>
                                        <FormattedMessage id={"homeheader.medical"} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className='fa fa-ambulance'></i><br></br>
                                    <div className='sub'>
                                        <FormattedMessage id={"homeheader.product"} /><br></br>
                                        <FormattedMessage id={"homeheader.medical2"} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='#' className='ahhd-child'>
                                    <i className="fa fa-street-view"></i><br></br>
                                    <div className='sub'>
                                        <FormattedMessage id={"homeheader.health"} /><br></br>
                                        <FormattedMessage id={"homeheader.mental"} />
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
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
