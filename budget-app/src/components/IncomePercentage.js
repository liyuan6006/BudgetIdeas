import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Save from '@material-ui/icons/Save';
import InputAdornment from '@material-ui/core/InputAdornment';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});



class IncomePercentage extends React.Component {
  state = {
    needs: '50',
    wants: '30',
    saving: '20'
  };
  handleSave = () => {
  this.props.handleSave()
    
};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form >
   
        <TextField
          id="needs"
          label="Needs"
          value={this.state.needs}
          onChange={this.handleChange('needs')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
          <TextField
          id="wants"
          label="Wants"
          value={this.state.wants}
          onChange={this.handleChange('wants')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
         <TextField
          id="saving"
          label="Saving"
          value={this.state.saving}
          onChange={this.handleChange('saving')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
        <br />
                <Button variant="contained" size="small" onClick={() => this.handleSave()} >
                    <Save />
                    Save
                </Button>
      </form>
    );
  }
}

IncomePercentage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IncomePercentage);