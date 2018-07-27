import React from 'react';
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import { getCategories, update, addCategory, deleteCategory } from '../actions/category';
import { blue100, red100 } from 'material-ui/styles/colors';
import CategoryCard from '../components/CategoryCard';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  radioButton: {
    marginBottom: 16,
    '&$checked': {
      color: red100
    }
  },
};



class SetCategories extends React.Component {

  componentDidMount() {
    this.props.getCategories()
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

  render() {
    return (
      <div >
        <CategoryCard categories={this.props.categories}
          onItemDelete={this.handleItemRequestDelete}
          onItemClick={this.handleItemClick}
          onAdd={this.handleAdd} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(SetCategories);