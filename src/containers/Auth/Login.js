import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import { handleLogin } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleClickLogin = async () => {
        console.log('show state: ', this.state)
        this.setState({
            errMessage: ''
        })
        try {
            let resPonse = await handleLogin(this.state.username, this.state.password);
            // if (resPonse) {
            //     if (resPonse.data) {
            //         if (resPonse.data.errCode !== 0) {
            //             this.setState({
            //                 errMessage: resPonse.data.message
            //             })
            //         } 
            //     }
            // }
            console.log(resPonse)
            if (resPonse && resPonse.errCode !== 0) {
                this.setState({
                    errMessage: resPonse.message
                })
            }
            if (resPonse && resPonse.errCode === 0) {
                this.props.userLoginSuccess(resPonse.user);
                console.log(`Infor's user is valid`);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input '>
                            <label>Username:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Your username'
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeUsername(e)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    className='form-control'
                                    // type='text'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Your password'
                                    value={this.state.password}
                                    onChange={(e) => { this.handleOnChangePassword(e) }}
                                />
                                <span
                                    onClick={() => this.handleShowHidePassword()}
                                ><i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i></span>
                            </div>

                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 '>
                            <button className='btn-login'
                                onClick={() => this.handleClickLogin()}
                            >Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span>Or login with:</span>
                        </div>
                        <div className='social-login'>
                            <i className="fab fa-brands fa-google-plus"></i>
                            <i className="fab fa-facebook"></i>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
