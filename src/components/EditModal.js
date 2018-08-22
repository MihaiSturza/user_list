import React from 'react';
import UserForm from './UserForm';
import Modal from '@material-ui/core/Modal';



const EditModal = ({props, handleCancelEditModal, handleSaveEditModal, onUpdateNewUser}) => {
    
    return (
        <Modal
            className="modal"
            hideBackdrop={false}
            aria-describedby="simple-modal-description"
            open={props.openEditModal}
            onClose={handleCancelEditModal || handleSaveEditModal }>
                <div className="modal-text">
                    <div className="modal-title">Edit user details</div>
                        <UserForm 
                            user={props.currentUser} 
                            handleSaveEditModal={ handleSaveEditModal }
                            handleCancelEditModal={handleCancelEditModal}
                            onUpdateNewUser={onUpdateNewUser}
                            />  
                </div>
        </Modal>
    );
}


export default EditModal;