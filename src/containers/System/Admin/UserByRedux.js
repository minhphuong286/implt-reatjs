import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserByRedux.scss';
import { getAllcodes } from '../../../services/userService';
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils/constant';
import * as actions from '../../../store/actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import { toast } from 'react-toastify';
import { CommonUtils } from '../../../utils';

class UserByRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImg: '',
            isPreview: false,

            eml: '',
            pwd: '',
            fn: '',
            ln: '',
            pn: '',
            ads: '',
            gdr: '',
            pst: '',
            rl: '',
            avt: '',

            action: '',
            userEditId: ''
        }
    }

    async componentDidMount() {
        this.props.getGenders();
        this.props.getPositions();
        this.props.getRoles();

    }
    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            // this.props.genderRedux: value hien tai
            let gdrArr = this.props.genderRedux
            this.setState({
                genderArr: gdrArr,
                gdr: gdrArr && gdrArr.length > 0 ? gdrArr[0].keyMap : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let pstArr = this.props.positionRedux
            this.setState({
                positionArr: pstArr,
                pst: pstArr && pstArr.length > 0 ? pstArr[0].keyMap : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let rlArr = this.props.roleRedux
            this.setState({
                roleArr: rlArr,
                rl: rlArr && rlArr.length > 0 ? rlArr[0].keyMap : ''
            })
        }
        if (prevProps.usersArr !== this.props.usersArr) {
            let gdrArr = this.props.genderRedux;
            let pstArr = this.props.positionRedux;
            let rlArr = this.props.roleRedux;
            this.setState({
                eml: '',
                pwd: '',
                fn: '',
                ln: '',
                pn: '',
                ads: '',
                gdr: gdrArr && gdrArr.length > 0 ? gdrArr[0].keyMap : '',
                pst: pstArr && pstArr.length > 0 ? pstArr[0].keyMap : '',
                rl: rlArr && rlArr.length > 0 ? rlArr[0].keyMap : '',
                avt: '',
                previewImg: '',
                action: CRUD_ACTIONS.CREATE
            })
        }

    }
    handleOnChangeAvatar = async (event) => {
        let data = event.target.files;
        let file = data[0]
        if (file) {
            let objUrl = URL.createObjectURL(file);
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                previewImg: objUrl,
                avt: base64
            })
        }
    }
    handlePreviewAvatar = () => {
        if (!this.state.previewImg) return;
        this.setState({
            isPreview: !this.state.isPreview
        })
    }

    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state };
        copyState[id] = e.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidInput = () => {
        let arrInput = ['eml', 'pwd', 'fn', 'ln', 'pn', 'ads'];
        for (let i = 0; i < arrInput.length; i++) {
            if (this.state[arrInput[i]].length === 0) {
                toast.error('Missing input parameter: ' + arrInput[i])
                return false;
            }
        }
        return true;
    }
    handleSave = () => {
        let check = this.checkValidInput();
        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            if (check === true) {
                this.props.saveUser({
                    email: this.state.eml,
                    password: this.state.pwd,
                    firstName: this.state.fn,
                    lastName: this.state.ln,
                    address: this.state.ads,
                    phoneNb: this.state.pn,
                    gender: this.state.gdr,
                    role: this.state.rl,
                    position: this.state.pst,
                    avatar: this.state.avt
                })
            }
        }
        if (action === CRUD_ACTIONS.EDIT) {
            this.props.editUserStart({
                id: this.state.userEditId,
                firstName: this.state.fn,
                lastName: this.state.ln,
                address: this.state.ads,
                phonenumber: this.state.pn,
                gender: this.state.gdr,
                roleId: this.state.rl,
                positionId: this.state.pst,
                avatar: this.state.avt
            })
        }
    }
    handleEditUser = (user) => {
        let imageBase64 = "";
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        }
        this.setState({
            eml: user.email,
            pwd: 'Disable',
            fn: user.firstName,
            ln: user.lastName,
            ads: user.address,
            pn: user.phonenumber,
            gdr: user.gender,
            rl: user.roleId,
            pst: user.positionId,
            avt: '',
            previewImg: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id
        })
    }
    render() {
        let { genderArr, positionArr, roleArr } = this.state;
        let { eml, pwd, fn, ln, pn, ads, gdr, pst, rl, action } = this.state;
        let { lang, genderRedux, isLoading } = this.props;
        // console.log("data gender in render: ", genderRedux)
        // console.log("check isLoading: ", isLoading)
        return (
            <>
                <div className="title text-center">Manager Users ByRedux</div>
                <div className='isLoading'>{isLoading === true ? 'Loading...' : ''}</div>
                <div className='container'>
                    <div className="form-row row">
                        <div className="form-group col-md-9">
                            <div className='form-row row '>
                                <div className="form-group col-md-6">
                                    <label htmlFor="eml"><FormattedMessage id={"manage-user.email"} /></label>
                                    <input type="email" className="form-control" id="eml" placeholder="Email"
                                        value={eml}
                                        onChange={(e) => { this.handleOnChangeInput(e, 'eml') }}
                                        disabled={action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="pwd"><FormattedMessage id={"manage-user.password"} /></label>
                                    <input type="text" className="form-control" id="pwd" placeholder="Password"
                                        value={pwd}
                                        onChange={(e) => { this.handleOnChangeInput(e, 'pwd') }}
                                        disabled={action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                            </div>
                            <div className='form-row row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fn"><FormattedMessage id={"manage-user.firstname"} /></label>
                                    <input type="text" className="form-control" id="fn" placeholder="Firstname"
                                        value={fn}
                                        onChange={(e) => { this.handleOnChangeInput(e, 'fn') }}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="ln"><FormattedMessage id={"manage-user.lastname"} /></label>
                                    <input type="ln" className="form-control" id="ln" placeholder="Lastname"
                                        value={ln}
                                        onChange={(e) => { this.handleOnChangeInput(e, 'ln') }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <div className='avatar'>
                                <label className='choose' htmlFor="avt"><FormattedMessage id={"manage-user.avatar"} /> <i className="fa fa-upload" aria-hidden="true"></i></label>
                                {/* <span className='choose-name'></span> */}
                                <input type="file" id="avt" hidden
                                    onChange={(event) => { this.handleOnChangeAvatar(event) }}
                                />
                                <div className='preview'
                                    style={{ backgroundImage: `url(${this.state.previewImg})` }}
                                    onClick={() => this.handlePreviewAvatar()}
                                >
                                    {this.state.isPreview === true &&
                                        <Lightbox
                                            mainSrc={this.state.previewImg}
                                            onCloseRequest={() => this.setState({ isPreview: false })}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-md-4">
                            <label htmlFor="pn"><FormattedMessage id={"manage-user.phone"} /></label>
                            <input type="text" className="form-control" id="pn" placeholder="Phone"
                                value={pn}
                                onChange={(e) => { this.handleOnChangeInput(e, 'pn') }}
                            />
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="ads"><FormattedMessage id={"manage-user.address"} /></label>
                            <input type="text" className="form-control" id="ads" placeholder="Address"
                                value={ads}
                                onChange={(e) => { this.handleOnChangeInput(e, 'ads') }}
                            />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="form-group col-md-4">
                            <label htmlFor="gdr"><FormattedMessage id={"manage-user.gender"} /></label>
                            <select id="gdr" className="form-select form-control"
                                value={gdr}
                                onChange={(e) => { this.handleOnChangeInput(e, 'gdr') }}
                            >
                                {genderArr && genderArr.length > 0 &&
                                    genderArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>
                                                {lang === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="pst"><FormattedMessage id={"manage-user.position"} /></label>
                            <select id="pst" className="form-select form-control"
                                value={pst}
                                onChange={(e) => { this.handleOnChangeInput(e, 'pst') }}
                            >
                                {positionArr && positionArr.length > 0 &&
                                    positionArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>
                                                {lang === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="rl"><FormattedMessage id={"manage-user.role"} /></label>
                            <select id="rl" className="form-select form-control"
                                value={rl}
                                onChange={(e) => { this.handleOnChangeInput(e, 'rl') }}
                            >
                                {roleArr && roleArr.length > 0 &&
                                    roleArr.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>
                                                {lang === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <button type='submit'
                        className={action === CRUD_ACTIONS.CREATE ? "btn btn-primary btn-save" : "btn btn-warning btn-save"}
                        onClick={() => this.handleSave()}
                    >
                        {action === CRUD_ACTIONS.CREATE ?
                            <FormattedMessage id={"manage-user.save"} />
                            : <FormattedMessage id={"manage-user.edit"} />
                        }
                    </button>

                    <div className='row'>
                        <TableManageUser
                            handleEditUser={this.handleEditUser}
                        />
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoading: state.admin.isLoading,
        usersArr: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenders: () => dispatch(actions.fetchGenderStart()),
        getPositions: () => dispatch(actions.fetchPositionStart()),
        getRoles: () => dispatch(actions.fetchRoleStart()),
        saveUser: (data) => dispatch(actions.createNewUser(data)),
        editUserStart: (user) => dispatch(actions.editUserStart(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserByRedux);
