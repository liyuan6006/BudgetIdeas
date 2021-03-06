import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const ITEM_HEIGHT = 48;

class BudgetMoreMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDelete=id=>{
    this.props.onDelete(id);
  }
  handleEdit=id=>{
    this.props.onEdit(id);
  }
  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            }
          }}
        >
          <MenuItem onClick={()=>this.handleDelete(this.props.id)}>Delete</MenuItem>
          <MenuItem onClick={()=>this.handleEdit(this.props.id)}>Edit</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default BudgetMoreMenu;