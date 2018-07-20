import React from 'react';


import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import { deleteCategory, getCategories,update } from '../actions/category';
import CategoryRadioButtons from '../components/CategoryRadioButtons';
import CategoryMoreMenu from '../components/CategoryMoreMenu';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


var oldCategory = null;
class SetCategories extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  handleChange=id=>event=> {
    var type = event.target.innerText;
    var path =id+"/type";
    this.props.updateCategory(path,type);
  }



  render() {
    return (
        <List>
          {
            this.props.categories.map(category => (
              <div>
              <ListItem primaryText={category.name} secondaryText={category.type}   />
              <CategoryMoreMenu onChange={this.handleChange(category.id)}/>
              <Divider />
              </div>
            ))
          }
        </List>
    );
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
      dispatch(update(nodePath,value))
  }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SetCategories);