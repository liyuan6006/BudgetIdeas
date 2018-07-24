import React from 'react';
import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import Chip from 'material-ui/Chip';
import { connect } from 'react-redux';
import { getCategories, update } from '../actions/category';

import CategoryRadioButtons from '../components/CategoryRadioButtons';

import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  chip: {
    margin: 4,
  },
};
const maxDepth = 2;
class SetCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // treeData: [{
      //   title: '`title`',
      //   subtitle: '`subtitle`',
      //   expanded: true,
      //   children: [
      //     {
      //       title: 'Child Node',
      //       subtitle: 'Defined in `children` array belonging to parent',
      //     },
      //     {
      //       title: 'Nested structure is rendered virtually',
      //       subtitle: (
      //         <span>
      //           The tree uses&nbsp;
      //           <a href="https://github.com/bvaughn/react-virtualized">
      //             react-virtualized
      //           </a>
      //           &nbsp;and the relationship lines are more of a visual trick.
      //         </span>
      //       ),
      //     },
      //   ],
      // },
      // {
      //   expanded: true,
      //   title: 'Any node can be the parent or child of any other node',
      //   children: [
      //     {
      //       expanded: true,
      //       title: 'Chicken',
      //       children: [{ title: 'Egg' }],
      //     },
      //   ],
      // },
      // ]
      treeData: []
    };
  }

  componentDidMount() {
    this.props.getCategories()
  
     
  }

  static getDerivedStateFromProps(props, state){
    console.log(props)
    console.log(state)
  }

  handleChange = (id, value) => {
    
    var path = id;
    this.props.updateCategory(path, value);
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.props.categories.list}
          onChange={
            //treeData => this.setState({ treeData })
            treeData => (this.handleChange(this.props.categories.id,treeData))
          }
          onMoveNode={({ node, treeIndex, path }) =>
          console.log(
            'node:',
            node,
            'treeIndex:',
            treeIndex,
            'path:',
            path
          )
        }
          maxDepth={maxDepth}
        />
      </div>
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
      dispatch(update(nodePath, value))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SetCategories);