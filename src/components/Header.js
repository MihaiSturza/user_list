import React from 'react';
import Button from '@material-ui/core/Button';



const Header = ({ handleAddModal }) => {
    
        return(
            <div className="header">
                <div className="title">List</div>
                <Button variant="extendedFab" 
                       area-label="Add" 
                       className="add-btn"
                       mini 
                       onClick={() => handleAddModal()}>
                    <i className="material-icons">person_add</i>
                </Button>
            </div>
        );
}

export default Header;