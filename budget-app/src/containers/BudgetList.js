import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';


import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { getBudgets, deleteBudget } from '../actions/budget';
import Budget from '../components/Budget';
import BudgetMoreMenu from '../components/BudgetMoreMenu'
const styles = theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});



class BudgetList extends React.Component {

    componentDidMount() {
        this.props.getBudgets();
    }

    handleAdd = () => {
        this.props.history.push('/addbudget')
    }

    handleDelete = (id) => {
        this.props.deleteBudget(id)
    };
    handleEdit = () => {
        //  this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    {
                        this.props.budgets.map(budget => (
                            <div key={`item-${budget.id}}`}>
                                <Budget budget={budget} onDelete={this.handleDelete}/>
                              <Divider/>
                            </div>
                        )
                        )
                    }
                </List>
                <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                    <AddIcon onClick={() => this.handleAdd()} />
                </Button>
            </div>
        )

    };
}

const mapStateToProps = state => {
    return {
        budgets: state.budgets
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getBudgets: () => {
            dispatch(getBudgets())
        },
        deleteBudget: id => {
            dispatch(deleteBudget(id))
        },
    }
}

BudgetList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BudgetList));