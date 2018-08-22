import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserForm extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.openAddModal ? this.state = {name: '', dob: '', phone: ''} : this.state = this.props.user;
  }
   
  
  handleOnNewUser() {
    this.props.onAddNewUser(this.state);
    this.props.handleAddModal();
  }


  handleOnEditUser() {
    this.props.onUpdateNewUser(this.state);
    this.props.handleSaveEditModal();
  }



    render() {
        return(
            <div>
            <form noValidate autoComplete="off" className="new-form"> 
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              margin="normal"
              onChange={event => this.setState({name: event.target.value})}
            />
            <br/>  
            <TextField
              id="Date of Birth"
              label="Date of Birth"
              type="date"
              margin="normal"
              value={this.state.dob}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={event => this.setState({dob: event.target.value})}
            />
            <br/>
            <TextField
              id="Phone"
              label="Phone"
              value={this.state.phone}
              margin="normal"
              onChange={event => this.setState({phone: event.target.value})}
            />
            </form>

            <div className="contain-modal-btn">
              <Button variant="extendedFab" 
                area-label="Cancel" 
                className="modal-btn-left" 
                mini 
                onClick={() => this.props.openAddModal ? this.props.handleAddModal() : this.props.handleCancelEditModal() }>
                <i className="material-icons">close</i>
              </Button>

              <Button variant="extendedFab" 
                area-label="Save" 
                className="modal-btn-right" 
                mini
                disabled={false} 
                onClick={() => this.props.openAddModal ? this.handleOnNewUser() : this.handleOnEditUser()}>
                <i className="material-icons">check</i>
              </Button>
            </div>

            </div>
        );
    }
}

export default UserForm;