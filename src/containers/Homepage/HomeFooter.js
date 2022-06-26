import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

import './HomeFooter.scss';
// import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions/appActions';
class HomeFooter extends Component {

    handleChangeLangs = (lang) => {
        this.props.changeLanguageAppRedux(lang)
    }

    render() {
        let langRedux = this.props.lang;
        console.log('check lang: ', langRedux)
        return (
            <footer className='homefooter'>
                <div className='homefooter-copyright'>
                    &#169; 2022 BookingCare
                </div>
                <div className='homefooter-media'>
                    <a href='' target='_blank' className='facebook'>
                        <div className='logo-media'></div>
                    </a>
                    <a href='' target='_blank' className='youtube'>
                        <div className='logo-media'></div>
                    </a>
                </div>
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
