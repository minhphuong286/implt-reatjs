// import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { ModalFooter } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {

    }
    
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidInputs = () => {
        let arrIdInputs = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrIdInputs.length; i++){
            if (this.state[arrIdInputs[i]] === '') {
                alert('Missing parameter!'+arrIdInputs[i]);
                return false;
            }
        }
        return true;
    }
    handleAdd = () => {
        let isValid = this.checkValidInputs();
        if (isValid === true) {
            this.props.handleCreateNewUser(this.state)
        }
    }
    render() {
        let { isOpenUserModal, toggleUserModal, handleCreateNewUser } = this.props;
        // console.log(this.props)
        console.log("Check state after modify: ",this.state)
        return (
            <Modal
                isOpen={isOpenUserModal}
                toggle={toggleUserModal}
                className={"modal-user-container"}
            >
                <ModalHeader toggle={toggleUserModal}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input name='email' type='email'
                                value={this.state.email}
                                onChange={(event) => {this.handleOnChangeInput(event, 'email')}}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input name='password' type='text'
                                value={this.state.password}
                                onChange={(event) => {this.handleOnChangeInput(event, 'password')}}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Firstname</label>
                            <input name='firstName' type='text'
                                value={this.state.firstName}
                                onChange={(event) => {this.handleOnChangeInput(event, 'firstName')}}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Lastname</label>
                            <input name='lastName' type='text'
                                value={this.state.lastName}
                                onChange={(event) => {this.handleOnChangeInput(event, 'lastName')}}
                            />
                        </div>
                        <div className='input-container full-cover'>
                            <label>Address</label>
                            <input name='address' type='text'
                                value={this.state.address}
                                onChange={(event) => {this.handleOnChangeInput(event, 'address')}}
                            />
                        </div>

                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary px-3" onClick={() => {this.handleAdd()}}>Add</Button>{' '}
                    <Button color="secondary px-3" onClick={toggleUserModal}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
