// import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { ModalFooter } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ld from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }


    componentDidMount() {
        let user = this.props.handleEditUser;
        console.log('User received from parent: ', user)
        if (user && !ld.isEmpty(user)) {
            // console.log("entered")
            this.setState({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidInputs = () => {
        let arrIdInputs = ['email', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrIdInputs.length; i++) {
            if (this.state[arrIdInputs[i]] === '') {
                alert('Missing parameter! ' + arrIdInputs[i]);
                return false;
            }
        }
        return true;
    }
    handleSave = () => {
        let isValid = this.checkValidInputs();
        if (isValid === true) {
            this.props.handleSaveAfterEdit(this.state)
        }
    }

    render() {
        let { isOpenEditUserModal, toggleEditUserModal, handleEditUser } = this.props;
        console.log("Props of child: ", this.props)
        // console.log("Check state after modify: ", this.state)
        return (
            <Modal
                isOpen={isOpenEditUserModal}
                toggle={toggleEditUserModal}
                className={"modal-user-container"}
            >
                <ModalHeader toggle={toggleEditUserModal}>Edit user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container full-cover'>
                            <label>Email</label>
                            <input name='email' type='email'
                                value={this.state.email}
                                onChange={(event) => { this.handleOnChangeInput(event, 'email') }}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Firstname</label>
                            <input name='firstName' type='text'
                                value={this.state.firstName}
                                onChange={(event) => { this.handleOnChangeInput(event, 'firstName') }}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Lastname</label>
                            <input name='lastName' type='text'
                                value={this.state.lastName}
                                onChange={(event) => { this.handleOnChangeInput(event, 'lastName') }}
                            />
                        </div>
                        <div className='input-container full-cover'>
                            <label>Address</label>
                            <input name='address' type='text'
                                value={this.state.address}
                                onChange={(event) => { this.handleOnChangeInput(event, 'address') }}
                            />
                        </div>

                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary px-3" onClick={() => { this.handleSave() }}>Save changes</Button>{' '}
                    <Button color="secondary px-3" onClick={toggleEditUserModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
