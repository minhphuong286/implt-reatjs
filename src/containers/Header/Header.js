import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
import { FormattedMessage } from 'react-intl';
class Header extends Component {
    handleChangeLangs = (lang) => {
        this.props.changeLanguageAppRedux(lang)
    }
    render() {
        const { processLogout, lang, userInfo } = this.props;
        // console.log('UserInfo: ', userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className='header-container-right'>
                    <span className='welcome'>
                        <FormattedMessage id={"menu.title.welcome"} />
                        &nbsp; {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                        {userInfo && userInfo.lastName ? ' ' + userInfo.lastName : ''}
                    </span>
                    <div className='languages'>
                        <span className={lang === LANGUAGES.VI ? 'langs-vi active' : 'langs-vi'}
                            onClick={() => this.handleChangeLangs(LANGUAGES.VI)}
                        >
                            VN
                        </span>
                        <span className={lang === LANGUAGES.EN ? 'langs-en active' : 'langs-en'}
                            onClick={() => this.handleChangeLangs(LANGUAGES.EN)}
                        >
                            EN
                        </span>
                    </div>
                    <div className="btn btn-logout" onClick={processLogout} title='logout system'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
