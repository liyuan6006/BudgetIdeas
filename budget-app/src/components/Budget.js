import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const Budget = (props) => (
    <ListItem  button>
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={`Name is ${props.budget.name} Amount is ${props.budget.budget}`} />
    </ListItem>
)

export default Budget;