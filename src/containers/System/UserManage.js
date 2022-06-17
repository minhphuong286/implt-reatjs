import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
import ModalUser  from "./ModalUser";
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [], 
            isOpenUserModal: false
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('All');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })//, () => {
            //    console.log('check async state: ', this.state.arrUsers)
            //})
        }
        // console.log('getAllUser, ', response);
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenUserModal: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenUserModal: !this.state.isOpenUserModal
        })
    }

    render() {
        console.log('thinking lifecycle: ', this.state)
        return (
            <div className='users-container'>
                <ModalUser
                    isOpenUserModal = {this.state.isOpenUserModal}
                    toggleUserModal = {this.toggleUserModal}
                />
                <div className="title text-center">Manage users</div>
                <div className='mx-3'>
                    <button 
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    >
                    <i className='fas fa-plus'></i> Add new user
                    </button>
                </div>
                <div className='users-table mt-3 mx-3'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {this.state.arrUsers && this.state.arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{ item.email}</td>
                                    <td>{ item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{ item.address}</td>
                                    <td>
                                        <a href='#'><i className='fas fa-pencil-alt'></i></a>
                                        <a href='#'><i className='fas fa-trash'></i></a>
                                    </td>
                                </tr>
                            )
                        })

                        }
                        
                        
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
