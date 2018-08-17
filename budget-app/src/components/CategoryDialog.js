import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  avatar: {
    margin: 10,
  },
  redAvatar: {

    color: '#fff',
    backgroundColor: red[500],
  },
  redAvatar: {
    color: '#fff',
    backgroundColor: red[500],
},
blueAvatar: {
    color: '#fff',
    backgroundColor: blue[500],
},
purpleAvatar: {
    color: '#fff',
    backgroundColor: purple[500],
},

});

class CategoryDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleItemClick = (categoryValue,typeValue) => {
    this.props.onClose(categoryValue,typeValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select a category</DialogTitle>
        <div>
          <List>
            {
              this.props.categories.map(obj => (
                <Chip key={obj.id} label={obj.name}
                  avatar={obj.type === "needs" ?
                    <Avatar className={classes.redAvatar}>N</Avatar>
                    : obj.type === "wants" ?
                    <Avatar className={classes.purpleAvatar}>W</Avatar>
                    :<Avatar className={classes.blueAvatar}>S</Avatar>
                  }
                  className={classes.chip}
                  onClick={() => this.handleItemClick(obj.name,obj.type)}
                />
              )
              )
            }
          </List>
        </div>
      </Dialog>
    );
  }
}

CategoryDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(CategoryDialog);