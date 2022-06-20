import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import "./UserManage.scss";
import { getAllUsers, createUser, deleteUser, saveUser } from "../../services/userService";
import ModalUser from "./ModalUser";
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenUserModal: false,
            isOpenEditUserModal: false,
            arrEditUser: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }
    getAllUsersFromReact = async () => {
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
    toggleEditUserModal = () => {
        this.setState({
            isOpenEditUserModal: !this.state.isOpenEditUserModal
        })
    }
    handleCreateNewUser = async (data) => {
        try {
            let response = await createUser(data);

            if (response && response.errCode !== 0) {
                console.log("check Message: ", response)
                // await alert(response.errCode)
                alert(response.message)
            } else {
                this.setState({
                    isOpenUserModal: false,
                })
                await this.getAllUsersFromReact();
                emitter.emit('EVENT_CLEAR_MODEL_DATA')
            }


        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        try {
            // console.log('check data user: ', user.id)
            let response = await deleteUser(user.id);

            if (response && response.errCode !== 0) {
                // console.log("check Message: ", response)
                // await alert(response.errCode)
                alert(response.message)
            }
            else {
                await this.getAllUsersFromReact();
            }

        } catch (e) {
            console.log(e)
        }
    }
    handleEditUser = (user) => {
        console.log("get User after click EDIT button: ", user)
        this.setState({
            isOpenEditUserModal: true,
            arrEditUser: user
        })
    }
    handleSaveAfterEdit = async (user) => {
        try {
            console.log('check data received from child (after click Savechanged Button: ', user)
            let response = await saveUser(user);

            if (response && response.errCode !== 0) {
                // console.log("check Message: ", response)
                // await alert(response.errCode)
                alert(response.message)
            }
            else {
                this.setState({
                    isOpenEditUserModal: false
                })
                await this.getAllUsersFromReact();
            }

        } catch (e) {
            console.log(e)
        }
    }
    render() {
        console.log('thinking lifecycle: ', this.state)
        return (
            <div className='users-container'>
                <ModalUser
                    isOpenUserModal={this.state.isOpenUserModal}
                    toggleUserModal={this.toggleUserModal}
                    handleCreateNewUser={this.handleCreateNewUser}
                />
                {this.state.isOpenEditUserModal &&
                    <ModalEditUser
                        isOpenEditUserModal={this.state.isOpenEditUserModal}
                        toggleEditUserModal={this.toggleEditUserModal}
                        handleEditUser={this.state.arrEditUser}
                        handleSaveAfterEdit={this.handleSaveAfterEdit}
                    />
                }

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
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {this.state.arrUsers && this.state.arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button onClick={() => this.handleEditUser(item)}><i className='fas fa-pencil-alt'></i></button>
                                            <button onClick={() => this.handleDeleteUser(item)}><i className='fas fa-trash'></i></button>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
