import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from 'react-redux';
import {deleteCategory,getCategories} from '../actions/category';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

const categoryBelongs = ["Needs","Wants","Saving"];
class SetCategories extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset"  className={classes.formControl}>
          <FormLabel component="legend">Needs</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
          
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset"  error className={classes.formControl}>
          <FormLabel component="legend">Wants</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
           
          </RadioGroup>
       
        </FormControl>
        <FormControl component="fieldset"  error className={classes.formControl}>
          <FormLabel component="legend">Saving</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
          
          </RadioGroup>
         
        </FormControl>
      </div>
    );
  }
}



const mapStateToProps = state =>{
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        getCategories:()=>{
            dispatch(getCategories())
        }
    }
}



export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(SetCategories));