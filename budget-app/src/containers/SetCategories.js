import React from 'react';
import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';



import { connect } from 'react-redux';
import {  getCategories,update } from '../actions/category';

import CategoryMoreMenu from '../components/CategoryMoreMenu';


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