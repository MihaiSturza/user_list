import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const ViewModal = ({props, handleViewModal, handleOpenEditModal, onDeleteCurrentUser}) => {
    return (
        <Modal
            className="modal"
            hideBackdrop={false}
            aria-describedby="simple-modal-description"
            open={props.openViewModal}
            onClose={handleViewModal}>
            <div className="modal-text">
                <div className="modal-btn-back">
                    <Button variant="fab" 
                    area-label="Cancel" 
                    mini 
                    onClick={handleViewModal}>
                    <i className="material-icons">keyboard_backspace</i>
                    </Button>
                </div>
                    <div className="modal-title">User Details</div>
                        <div className="user-details-container">
                        <div className="user-details">Name: {props.currentUser.name}</div>
                        <div className="user-details">Date of Birth: {props.currentUser.dob}</div>
                        <div className="user-details">Phone: {props.currentUser.phone}</div>
                        </div>
                    <div className="contain-modal-btn">
                        <Button variant="extendedFab" 
                            area-label="Cancel" 
                            className="modal-btn-left" 
                            mini 
                            onClick={onDeleteCurrentUser}>
                            <i className="material-icons">delete</i>
                        </Button>
                        <Button variant="extendedFab" 
                            area-label="Save" 
                            className="modal-btn-right" 
                            mini
                            disabled={false} 
                            onClick={handleOpenEditModal}>
                            <Icon>edit_icon</Icon>
                        </Button>
                    </div>
            </div>
        </Modal>
    );
}


export default ViewModal;