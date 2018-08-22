import React from 'react';
import Modal from '@material-ui/core/Modal';
import UserForm from './UserForm';


const AddModal = ({props, handleAddModal, onAddNewUser}) => {
    return (
        <Modal
            className="modal"
            hideBackdrop={false}
            aria-describedby="simple-modal-description"
            open={props.openAddModal}
            onClose={() => handleAddModal()}>
                <div className="modal-text">
                    <div className="modal-title">Add user to list</div>

                        <UserForm user={props.users} 
                                  openAddModal={props.openAddModal}
                                  handleAddModal={handleAddModal}
                                  onAddNewUser={onAddNewUser}
                                  />

                        <div className="contain-modal-btn">

                        </div>
                </div>
        </Modal>
    );
}


export default AddModal;