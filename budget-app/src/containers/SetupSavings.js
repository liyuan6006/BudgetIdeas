import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { getCategories, update, addCategory, deleteCategory } from '../actions/category';
import { getIncome, updateIncome } from '../actions/income';


import SetupCard from '../components/SetupCard';

const styles = theme => ({
  root: {
    width: '100%',
  },
  chip: {
    margin: theme.spacing.unit,
  },

});

class SetupSavings extends React.Component {
  componentDidMount() {
    this.props.getCategories()
    this.props.getIncome()
  }

  handleItemRequestDelete = (id) => {
    this.props.deleteCategory(id)
  }

  handleItemClick = (path, value) => {
    var newValue;
    if (value === 'needs') newValue = 'wants'
    if (value === 'wants') newValue = 'needs'
    this.props.updateCategory(path, newValue);
  }
  handleAdd = (value) => {
    this.props.addCategory(value);
  }

  handleAdd = (value) => {
    this.props.addCategory(value);
  }

  handleChange = (path, value) => {
    this.props.updateIncome(path, value);
  };

  render() {
    const { classes } = this.props;
    return (
      <SetupCard income={this.props.income} type="savings" categories={this.props.categories.filter(s => s.type === "savings")}
        onItemDelete={this.handleItemRequestDelete}
        onItemClick={this.handleItemClick}
        onAdd={this.handleAdd}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    income: state.income
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getIncome: () => {
      dispatch(getIncome())
    },
    updateIncome: (nodePath, value) => {
      dispatch(updateIncome(nodePath, value))
    },
    getCategories: () => {
      dispatch(getCategories())
    },
    updateCategory: (nodePath, value) => {
      dispatch(update(nodePath, value))
    },
    addCategory: newCategory => {
      dispatch(addCategory(newCategory))
    },
    deleteCategory: id => {
      dispatch(deleteCategory(id))
    }
  }
}

SetupSavings.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SetupSavings));
