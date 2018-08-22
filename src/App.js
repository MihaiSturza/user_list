import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import Header from './components/Header';
import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import ViewModal from './components/ViewModal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [ {
                id: 0,
                name: 'Ana',
                dob: '1987-02-17',
                avatarUrl: 'https://vignette.wikia.nocookie.net/the3kingdoms/images/f/f0/Lady_Mi.jpg/revision/latest?cb=20120520140847',
                phone: '0770312327'
              },
              {
                id: 1,
                name: 'Maria',
                dob: '1989-07-18',
                avatarUrl: 'https://vignette.wikia.nocookie.net/the3kingdoms/images/f/f0/Lady_Mi.jpg/revision/latest?cb=20120520140847',
                phone: '0752364891'
              }],
      currentUser: {},
      openAddModal: false,
      openEditModal: false,
      openViewModal: false
     
    } 
  }

  handleAddModal() {
    this.setState({ openAddModal: !this.state.openAddModal})
}
  
  handleEditModal() {
    this.setState({ openEditModal: !this.state.openEditModal});
}

  handleViewModal() {
    this.setState({ openViewModal: !this.state.openViewModal});
  }

  handleOpenEditModal() {
    this.setState({ openViewModal: !this.state.openViewModal,
                    openEditModal: !this.openEditModal});
  }

  handleSaveEditModal() {
    this.setState({ openEditModal: !this.state.openEditModal})
  }

  handleCancelEditModal() {
    this.setState({ openEditModal: !this.state.openEditModal})
  }

  onCurrentUser(user) {
    this.setState({currentUser: user});
    this.handleViewModal();
}

  onAddNewUser(newUser) {
    console.log(newUser);
    const id = this.state.users.length >=1 ? this.state.users[this.state.users.length - 1].id + 1 : 0;
    const updatedNewUser = {id, ...newUser};
    this.setState({users: [...this.state.users, updatedNewUser]});
  }

  onUpdateNewUser(updatedUser) {
    const newArrayOfUsers = [...this.state.users].map( user => user.id === updatedUser.id ? user = updatedUser : user);
    this.setState({users: newArrayOfUsers});
  }

  onDeleteCurrentUser() {
    const newArrayOfUsers = [...this.state.users].filter( user => user.id !== this.state.currentUser.id);
    this.setState({users: newArrayOfUsers});
    this.handleViewModal();
  }


  render() {
    return(
      <div className="app">
        <Header handleAddModal={this.handleAddModal.bind(this)} />
        <UserList 
            users={this.state.users}
            handleEditModal={this.handleEditModal.bind(this)}
            onCurrentUser={this.onCurrentUser.bind(this)}
            />
        <AddModal 
            props={this.state} 
            handleAddModal={this.handleAddModal.bind(this)}
            onAddNewUser={this.onAddNewUser.bind(this)} />
        <ViewModal 
            props={this.state} 
            onCurrentUser={this.onCurrentUser.bind(this)}
            handleViewModal={this.handleViewModal.bind(this)}
            handleOpenEditModal={this.handleOpenEditModal.bind(this)}
            onDeleteCurrentUser={this.onDeleteCurrentUser.bind(this)} />
        <EditModal 
            props={this.state} 
            handleEditModal={this.handleEditModal.bind(this)}
            handleAddModal={this.handleAddModal.bind(this)}
            handleSaveEditModal={this.handleSaveEditModal.bind(this)}
            handleCancelEditModal={this.handleCancelEditModal.bind(this)}
            onUpdateNewUser={this.onUpdateNewUser.bind(this)} />
      </div>
    )
  }
};


export default App;