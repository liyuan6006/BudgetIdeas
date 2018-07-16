import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
import { deleteCategory, getCategories } from '../actions/category';
import CategoryRadioButtons from '../components/CategoryRadioButtons';

const styles = theme => ({
  root: {
    width: '100%',

  },
  table: {
    minWidth: 500,
  },
});



class SetCategories extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }




  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>categories</TableCell>
              <TableCell>Needs-Wants-Saving</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.categories.map(category => (
                <TableRow key={category.id}>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell>
                  <CategoryRadioButtons/>
                  </TableCell>
                </TableRow>
              )
              )
            }
          </TableBody>
        </Table>
      </Paper>


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
    }
  }
}

SetCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SetCategories));