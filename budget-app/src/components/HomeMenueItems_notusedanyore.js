// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoney from '@material-ui/icons/AttachMoney';
import AccountBalance from '@material-ui/icons/AccountBalance';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import Settings from '@material-ui/icons/Settings';
import Notifications from '@material-ui/icons/Notifications';
import Timeline from '@material-ui/icons/Timeline';

export const mailFolderListItems = (
  <div>
  
    <ListItem button>
      <ListItemIcon>
      <a href='/budgets'>
        <AttachMoney />
        </a>
      </ListItemIcon>
      <ListItemText primary="Budget" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <a href='/transactions'>
        <AttachMoney />
        </a>
      </ListItemIcon>
      <ListItemText primary="Transaction" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <a href='/categories'>
        <LocalGroceryStore/>
        </a>
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <a href='/balance'>
        <AccountBalance />
        </a>
      </ListItemIcon>
      <ListItemText primary="Balance" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
     <ListItem button>
      <ListItemIcon>
      <a href='/settings'>
        <Settings />
        </a>
      </ListItemIcon>
   
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <a href='/categories'>
        <Notifications />
        </a>
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <a href='/setIncome'>
        <Timeline />
        </a>
      </ListItemIcon>
      <ListItemText primary="Income" />
    </ListItem>
   
   
  </div>
);