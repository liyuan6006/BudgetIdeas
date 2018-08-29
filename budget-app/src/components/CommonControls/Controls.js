import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = {
  avatar: {
    //margin: 10,
  },
  orangeAvatar: {
    //margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
   // margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  }
};

function NeedsAvatar(props) {
  const { classes } = props;
  return (
      <Avatar className={classes.orangeAvatar}>N</Avatar>
  );
}
function WantsAvatar(props) {
    const { classes } = props;
    return (
        <Avatar className={classes.purpleAvatar}>W</Avatar>
    );
  }
  function SavingsAvatar(props) {
    const { classes } = props;
    return (
        <Avatar className={classes.avatar}>S</Avatar>
    );
  }

NeedsAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

var NeedsAvatar =  withStyles(styles)(NeedsAvatar);
var WantsAvatar =  withStyles(styles)(WantsAvatar);
var SavingsAvatar =  withStyles(styles)(SavingsAvatar);

export {NeedsAvatar,WantsAvatar,SavingsAvatar}