import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  root: {
    color: green[600],
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',

  }
};

class CategoryRadioButtons extends React.Component {
  state = {
    selectedValue: 'needs',
  };

  handleChange = id => event => {
    this.setState({
        selectedValue: event.target.value,
        id: event.target.value
      });
      var category = {id:id,type:event.target.value}
    this.props.onChange(category)
  };



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Radio
          checked={this.state.selectedValue === 'needs'}
          onChange={this.handleChange(this.props.category.id)}
          value="needs"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.selectedValue === 'wants'}
          onChange={this.handleChange(this.props.category.id)}
          value="wants"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === 'saving'}
          onChange={this.handleChange(this.props.category.id)}
          value="saving"
          name="radio-button-demo"
          aria-label="C"
        />
      </div>
    );
  }
}

CategoryRadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryRadioButtons);