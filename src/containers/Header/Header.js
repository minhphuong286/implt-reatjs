import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from '../../utils';
import { FormattedMessage } from 'react-intl';
import ld from 'lodash';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuApp: [],
        }
    }
    componentDidMount() {
        let { userInfo } = this.props;
        let menu = [];
        if (userInfo && !ld.isEmpty(userInfo)) {
            let role = userInfo.roleId;
            if (role === USER_ROLE.ADMIN) {
                menu = adminMenu;
            }
            if (role === USER_ROLE.DOCTOR) {
                menu = doctorMenu;
            }
        }
        this.setState({
            menuApp: menu
        })
    }
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
                    <Navigator menus={this.state.menuApp} />
                </div>

                {/* nút logout */}
                <div className='header-container-right'>
                    <div className='welcome'>
                        <div><FormattedMessage id={"menu.common.welcome"} /></div>
                        &nbsp; {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                        {userInfo && userInfo.lastName ? ' ' + userInfo.lastName : ''}
                    </div>
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
