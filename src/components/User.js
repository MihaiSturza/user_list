import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const User = ({name, dob }) => {
    return (
        <div className="list-style" >
            <List>
            <ListItem>
              <Avatar>
                <i className="material-icons">
                    account_circle
                </i>
              </Avatar>
              <ListItemText primary={name} secondary={dob} />
            </ListItem>
            <li>
            <Divider inset />
            </li>
            </List>
        </div>
    );
}

export default User;