import React from 'react';
import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import { getCategories, update } from '../actions/category';

import CategoryRadioButtons from '../components/CategoryRadioButtons';
import { blue100, red100 } from 'material-ui/styles/colors';
import Tooltip from '@material-ui/core/Tooltip';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import CategoryCard from '../components/CategoryCard'
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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategories()
  }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleRequestDelete = () => {
    alert('You clicked the delete button.');
  }

  handleClick = (path, value) => {
    this.props.updateCategory(path, value);
  }

  render() {
    return (
      <div >
        <CategoryCard categories={this.props.categories}
          onDelete={this.handleRequestDelete}
          onClick={this.handleClick} />
        <div style={styles.wrapper}>
          <Chip backgroundColor={red100}>Needs</Chip>
          <Chip backgroundColor={blue100}>Wants</Chip>
        </div>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetCategories);