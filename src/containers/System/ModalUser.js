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
            
        }
    }

    componentDidMount() {
    }
    

    render() {
        let { isOpenUserModal, toggleUserModal } = this.props;
        // console.log(this.props)
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
                            <input name='email' type='email'/>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input name='password' type='text'/>
                        </div>
                        <div className='input-container'>
                            <label>Firstname</label>
                            <input name='firstname' type='text'/>
                        </div>
                        <div className='input-container'>
                            <label>Lastname</label>
                            <input name='lastname' type='text'/>
                        </div>
                        <div className='input-container full-cover'>
                            <label>Address</label>
                            <input name='address' type='text'/>
                        </div>

                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary px-3" onClick={toggleUserModal}>Add</Button>{' '}
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
