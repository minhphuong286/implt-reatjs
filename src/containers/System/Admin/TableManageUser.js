import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./TableManageUser.scss";
import * as actions from '../../../store/actions';
// import { getAllUsers, createUser, deleteUser, saveUser } from "../../services/userService";
// import ModalUser from "./ModalUser";
// import { emitter } from '../../utils/emitter';
// import ModalEditUser from './ModalEditUser';

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }
    componentDidMount() {
        this.props.fetchAllUserStart();
    }
    componentDidUpdate(prevProps, preState, snapshot) {
        if (prevProps.usersArr !== this.props.usersArr) {
            this.setState({
                usersRedux: this.props.usersArr
            })
        }
    }
    handleEditUser = (user) => {
        this.props.handleEditUser(user);// handleEditUser: props parent
    }
    handleDeleteUser = (user) => {
        this.props.deleteUserStart(user.id);
    }
    render() {
        let { usersRedux } = this.state;
        console.log(">>Check usersRedux: ", usersRedux)
        return (
            <div className='users-container'>
                <div className='users-table mt-5'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Position</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            {usersRedux && usersRedux.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.positionId}</td>
                                        <td>{item.roleId}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleEditUser(item)}
                                            ><i className='fas fa-pencil-alt'></i></button>
                                            <button
                                                onClick={() => this.handleDeleteUser(item)}
                                            ><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        usersArr: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUserStart: () => dispatch(actions.fetchAllUserStart()),
        deleteUserStart: (userId) => dispatch(actions.deleteUserStart(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
