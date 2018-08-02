import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCategoryDialog from './AddCategoryDialog';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
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
  orangeAvatar: {
  
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

class NeedsAndWantsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedId: '',
      dialogTitle: ''
    };
  }

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  handleItemDelete = (id, dialogTitle) => {
    //open dialog and set state for delete
    this.setState({ open: true, selectedId: id, dialogTitle: dialogTitle });
  }
  handleItemClick = (path, value) => {
    this.props.onItemClick(path, value)
  }

  handleAddSubmit = (value) => {
    this.props.onAdd(value);
  }

  handleDeleteSubmit = () => {
    this.props.onItemDelete(this.state.selectedId);
    this.setState({ open: false });
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <Card>
          <CardContent >
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="adornment-amount">Needs percentage</InputLabel>
              <Input
                id="adornment-weight"
                value={this.state.weight}
                onChange={this.handleChange('needsPercentage')}
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                inputProps={{
                  'aria-label': 'Weight',
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="adornment-amount">Needs amount</InputLabel>
              <Input
                id="adornment-amount"
                value={this.state.amount}
                onChange={this.handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
            {
              this.props.categories.map(obj => {
                if (obj.type === 'needs')
                  return (
                    <Chip key={obj.id} label={obj.name}
                      avatar={<Avatar className={classes.orangeAvatar}>N</Avatar>}
                      className={classes.chip}
                      onDelete={() => this.handleItemDelete(obj.id, obj.name)}
                      onClick={() => this.handleItemClick(obj.id + '/type', obj.type)}
                    />
                  )
              }
              )
            }
          </CardContent>
          <CardActions>
            <AddCategoryDialog onSubmit={this.handleAddSubmit} />
          </CardActions>
        </Card>

        <Card>
          <CardContent >
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="adornment-amount">Wants percentage</InputLabel>
              <Input
                id="adornment-weight"
                value={this.state.weight}
                onChange={this.handleChange('wantsPercentage')}
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                inputProps={{
                  'aria-label': 'Weight',
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="adornment-amount">Wants amount</InputLabel>
              <Input
                id="adornment-amount"
                value={this.state.amount}
                onChange={this.handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
            {
              this.props.categories.map(obj => {
                if (obj.type === 'wants')
                  return (
                    <Chip key={obj.id} label={obj.name}
                    avatar={<Avatar className={classes.purpleAvatar}>W</Avatar>}
                      className={classes.chip}
                      onDelete={() => this.handleItemDelete(obj.id, obj.name)}
                      onClick={() => this.handleItemClick(obj.id + '/type', obj.type)}
                    />
                  )
              }
              )
            }
          </CardContent>
          <CardActions>
            <AddCategoryDialog onSubmit={this.handleAddSubmit} />
          </CardActions>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Category?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete <b>{this.state.dialogTitle}</b>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDeleteSubmit} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    )
  }
}

NeedsAndWantsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NeedsAndWantsCard);
