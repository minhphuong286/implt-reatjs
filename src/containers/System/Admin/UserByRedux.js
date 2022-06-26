import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserByRedux.scss';
import { getAllcodes } from '../../../services/userService';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions';

class UserByRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        // this.props.getGenders();
        try {
            let res = await getAllcodes('gender');
            // console.log('Gender data: ', res)
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    // componentDidUpdate(prevProps, preState, snapshot) {
    //     if (prevProps.genderRedux !== this.props.genderRedux) {
    //         // this.props.genderRedux: value hien tai
    //         this.setState({
    //             genderArr: this.props.genderRedux
    //         })
    //     }
    // }

    render() {
        let { genderArr } = this.state;
        let { lang } = this.props;
        // console.log("data gender in render: ", genderRedux)
        // console.log("check isLoading: ", isLoading)
        return (
            <>
                <div className="title text-center">Manager Users ByRedux</div>
                {/* <div className='isLoading'>{isLoading === true ? 'Loading...' : ''}</div> */}
                <form className='container'>
                    <div className="form-row row">
                        <div className="form-group col-md-6">
                            <label htmlFor="em"><FormattedMessage id={"manage-user.email"} /></label>
                            <input type="email" className="form-control" id="em" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="pw"><FormattedMessage id={"manage-user.password"} /></label>
                            <input type="text" className="form-control" id="pw" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fn"><FormattedMessage id={"manage-user.firstname"} /></label>
                            <input type="text" className="form-control" id="fn" placeholder="Firstname" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ln"><FormattedMessage id={"manage-user.lastname"} /></label>
                            <input type="text" className="form-control" id="ln" placeholder="Lastname" />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-md-4">
                            <label htmlFor="pn"><FormattedMessage id={"manage-user.phone"} /></label>
                            <input type="text" className="form-control" id="pn" placeholder="Phone" />
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="ads"><FormattedMessage id={"manage-user.address"} /></label>
                            <input type="text" className="form-control" id="ads" placeholder="Address" />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-md-4">
                            <label htmlFor="gd"><FormattedMessage id={"manage-user.gender"} /></label>
                            <select id="gd" className="form-select form-control">
                                {genderArr && genderArr.length > 0 &&
                                    genderArr.map((item, index) => {
                                        return (
                                            <option key={index}>
                                                {lang === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="pos"><FormattedMessage id={"manage-user.position"} /></label>
                            <input type="text" className="form-control" id="pos" placeholder="Position" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="ro"><FormattedMessage id={"manage-user.role"} /></label>
                            <input type="text" className="form-control" id="ro" placeholder="Role" />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className='form-group'>
                            <label htmlFor="avt"><FormattedMessage id={"manage-user.avatar"} /></label>
                            <input type="text" className="form-control" id="avt" placeholder="Avatar" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-save "><FormattedMessage id={"manage-user.save"} /></button>
                </form>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        //     genderRedux: state.admin.genders,
        //     isLoading: state.admin.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getGenders: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserByRedux);
