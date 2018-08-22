import React, { Component } from 'react';
import User from './User';


class UserList extends Component {
  
    list() {
        return (
            this.props.users.map((user) => 
                <div onClick={() => this.props.onCurrentUser(user)} key={user.id}>
                    <User 
                        name={user.name}
                        dob={user.dob}
                        />
                </div>
                )
        ); 
    }
    
    render() {
        return (<ul className="list-group">{ this.list() }</ul>)
    }
}

export default UserList;

